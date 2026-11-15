(() => {
  const config = window.LEARN_BISHAMS_CONFIG || {};
  const message = document.getElementById("auth-message");
  const authArea = document.getElementById("auth-area");
  const studentArea = document.getElementById("student-area");
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");
  const loginTab = document.getElementById("show-login");
  const signupTab = document.getElementById("show-signup");

  document.getElementById("year").textContent = new Date().getFullYear();

  function showMessage(text, isError = false) {
    message.textContent = text;
    message.className = "message " + (isError ? "error" : "success");
  }

  function setTab(which) {
    const login = which === "login";
    loginForm.classList.toggle("hidden", !login);
    signupForm.classList.toggle("hidden", login);
    loginTab.classList.toggle("active", login);
    signupTab.classList.toggle("active", !login);
    showMessage("");
  }
  loginTab.addEventListener("click", () => setTab("login"));
  signupTab.addEventListener("click", () => setTab("signup"));

  const configured = config.SUPABASE_URL &&
    config.SUPABASE_PUBLISHABLE_KEY &&
    !config.SUPABASE_URL.includes("PASTE_") &&
    !config.SUPABASE_PUBLISHABLE_KEY.includes("PASTE_");

  if (!configured || !window.supabase) {
    showMessage("Setup needed: add your Supabase Project URL and publishable key in config.js, then refresh this page.", true);
    return;
  }

  const client = window.supabase.createClient(
    config.SUPABASE_URL,
    config.SUPABASE_PUBLISHABLE_KEY
  );

  function showStudent(user) {
    authArea.classList.add("hidden");
    studentArea.classList.remove("hidden");
    const name = user.user_metadata?.full_name || "Student";
    document.getElementById("welcome-name").textContent = `Welcome, ${name}!`;
    document.getElementById("student-email").textContent = user.email || "";
  }

  function showAuth() {
    studentArea.classList.add("hidden");
    authArea.classList.remove("hidden");
  }

  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value;
    showMessage("Logging you in...");
    const { data, error } = await client.auth.signInWithPassword({ email, password });
    if (error) return showMessage(error.message, true);
    showStudent(data.user);
  });

  signupForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const fullName = document.getElementById("full-name").value.trim();
    const email = document.getElementById("signup-email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("signup-password").value;
    if (!fullName || !phone) return showMessage("Please enter your full name and phone number.", true);

    showMessage("Creating your account...");
    const { data, error } = await client.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName, phone_number: phone },
        emailRedirectTo: window.location.origin
      }
    });
    if (error) return showMessage(error.message, true);

    if (data.session && data.user) {
      showStudent(data.user);
    } else {
      showMessage("Account created. Please check your email and confirm your address before logging in.");
      setTab("login");
    }
  });

  document.getElementById("forgot-password").addEventListener("click", async () => {
    const email = document.getElementById("login-email").value.trim();
    if (!email) return showMessage("Enter your email address in the login form first.", true);
    showMessage("Sending password reset email...");
    const { error } = await client.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.origin
    });
    if (error) return showMessage(error.message, true);
    showMessage("If an account exists for that email, a password reset link has been sent.");
  });

  document.getElementById("logout-button").addEventListener("click", async () => {
    const { error } = await client.auth.signOut();
    if (error) return showMessage(error.message, true);
    showAuth();
    setTab("login");
    showMessage("You have logged out.");
  });

  client.auth.getSession().then(({ data }) => {
    if (data.session?.user) showStudent(data.session.user);
  });
  client.auth.onAuthStateChange((_event, session) => {
    if (session?.user) showStudent(session.user);
    else showAuth();
  });
})();
