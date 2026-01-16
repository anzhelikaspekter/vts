<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create Account — VTS Limited</title>
    <meta name="description" content="Create your VTS Limited account to access investment tools, personal dashboard and secure financial services. Fast registration, protected access and full account control." />
    <meta name="keywords" content="VTS Limited register, VTS sign up, create VTS account, investment account registration, secure financial account, VTS dashboard access" />

    <!-- Author -->
    <meta name="author" content="Anzhelika Spekter">
    <meta name="copyright" content="© 2024 VTS LIMITED">
    <meta name="publisher" content="Anzhelika Spekter">

    <!-- NOINDEX -->
    <!-- <meta name="robots" content="noindex, nofollow"> -->

    <!-- Theme -->
    <meta name="theme-color" content="#000000">
    <meta name="apple-mobile-web-app-status-bar" content="#000000">

    <!-- Favicon -->
    <link rel="icon" href="assets/img/favicons/favicon.ico?v=1">
    <link rel="icon" type="image/png" sizes="32x32" href="assets/img/favicons/favicon-32.png?v=1">
    <link rel="icon" type="image/png" sizes="16x16" href="assets/img/favicons/favicon-16.png?v=1">
    <link rel="apple-touch-icon" sizes="180x180" href="assets/img/favicons/apple-touch-icon.png?v=1">
    <link rel="mask-icon" href="assets/img/favicons/safari-pinned-tab.svg?v=1" color="#262B57">
    <link rel="manifest" href="site.webmanifest">

    <!-- Preload -->
    <link rel="preload" as="image" href="assets/img/logo.svg" fetchpriority="high">

    <!-- Style -->
    <link rel="preload" href="assets/css/style.min.css?v=1.0.0" as="style">
    <link rel="stylesheet" href="assets/css/style.min.css?v=1.0.0">
</head>

<body>
    <main id="main">
        <section class="sign-up" aria-labelledby="signup-title">
            <header class="sign-up__header">
                <a href="index.php" class="btn-link">
                    <span class="icon back" aria-hidden="true"></span>
                    <span>Back to VTS Limited</span>
                </a>
            </header>

            <div class="sign-up__content">
                <header class="sign-up__content--header">
                    <div class="sign-up__content--logo" aria-label="VTS Limited" aria-hidden="true">
                        <img src="assets/img/logo.svg" width="160" height="40" alt="VTS LIMITED" fetchpriority="high" decoding="async">
                    </div>

                    <div class="sign-up__content--header-wrap">
                        <h1 class="sign-up__content--title" id="signup-title">Account Register</h1>

                        <p class="sign-up__content--desc">
                            Already have an account?
                            <a href="sign-in.php" class="sign-up__content--link">Sign in</a>
                        </p>
                    </div>
                </header>

                <form action="#" method="post" class="form" novalidate>
                    <div class="form__column">
                        <label for="login">Login</label>
                        <input
                            type="text"
                            name="login"
                            id="login"
                            placeholder="Enter your login"
                            autocomplete="username"
                            required>
                    </div>

                    <div class="form__column">
                        <label id="country-label" for="countryValue">Country</label>

                        <input type="hidden" name="country" id="countryValue" value="">

                        <div class="custom-select-wrapper">
                            <div class="custom-select" id="countrySelect" role="combobox" aria-labelledby="country-label" aria-controls="countryListbox" aria-expanded="false" aria-haspopup="listbox" tabindex="0">
                                <div class="custom-select-trigger">
                                    <span class="placeholder" id="countryPlaceholder">Select your country</span>
                                    <span class="icon dropdown-arrow" aria-hidden="true"></span>
                                </div>

                                <div class="custom-options" id="countryListbox" role="listbox" tabindex="-1">
                                    <span class="custom-option" role="option" id="country-opt-frst" data-value="frst" aria-selected="false" tabindex="-1">Country Frst</span>
                                    <span class="custom-option" role="option" id="country-opt-scnd" data-value="scnd" aria-selected="false" tabindex="-1">Country Scnd</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="form__column">
                        <label for="phone">Phone number</label>
                        <input type="tel" name="phone" id="phone" placeholder="Enter your phone number" autocomplete="tel" inputmode="tel" required>
                    </div>

                    <div class="form__column">
                        <label for="email">Email address</label>
                        <input type="email" name="email" id="email" placeholder="Enter your email address" autocomplete="email" required>
                    </div>

                    <div class="form__column">
                        <label for="password">Create password</label>

                        <div class="password-field">
                            <input type="password" name="password" id="password" placeholder="Enter your password" autocomplete="new-password" required>

                            <button type="button" class="icon show-password" aria-label="Show password" aria-controls="password" aria-pressed="false"></button>
                        </div>
                    </div>

                    <div class="form__column">
                        <label for="confirmPassword">Confirm password</label>

                        <div class="password-field">
                            <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm your password" autocomplete="new-password" required>

                            <button type="button" class="icon show-password" aria-label="Show confirm password" aria-controls="confirmPassword" aria-pressed="false"></button>
                        </div>
                    </div>

                    <div class="form__column">
                        <label for="upliner">Upliner</label>

                        <input type="text" name="upliner" id="upliner" placeholder="Enter your upliner" autocomplete="off">
                    </div>

                    <!-- Financial key -->
                    <fieldset class="form__column">
                        <legend>Set financial key</legend>

                        <div class="form__key" role="group" aria-label="Financial key">
                            <input class="code" inputmode="numeric" pattern="[0-9]*" maxlength="1" aria-label="Digit 1" required>
                            <input class="code" inputmode="numeric" pattern="[0-9]*" maxlength="1" aria-label="Digit 2" required>
                            <input class="code" inputmode="numeric" pattern="[0-9]*" maxlength="1" aria-label="Digit 3" required>
                            <input class="code" inputmode="numeric" pattern="[0-9]*" maxlength="1" aria-label="Digit 4" required>
                            <input class="code" inputmode="numeric" pattern="[0-9]*" maxlength="1" aria-label="Digit 5" required>
                            <input class="code" inputmode="numeric" pattern="[0-9]*" maxlength="1" aria-label="Digit 6" required>
                        </div>
                    </fieldset>

                    <footer class="sign-up__content--footer">
                        <button type="submit" class="btn-primary">Continue registration</button>

                        <?php include __DIR__ . '/templates/components/btn-choose.php'; ?>

                        <button type="button" class="btn-google">
                            <span class="icon google" aria-hidden="true"></span>
                            <span>Sign in with Google</span>
                        </button>
                    </footer>
                </form>
            </div>

            <footer class="sign-up__footer">
                <p class="sign-up__footer--desc">
                    By continuing, you agree to ImratGroup's
                    <a href="#" class="sign-up__footer--link">Terms of Service</a>
                    and
                    <a href="#" class="sign-up__footer--link">Privacy Policy</a>,
                    and to receive periodic emails with updates.
                </p>
            </footer>
        </section>
    </main>

    <script>
        document.addEventListener("DOMContentLoaded", function() {
            const showPasswordIcons = document.querySelectorAll('.show-password');

            showPasswordIcons.forEach(icon => {
                icon.addEventListener("click", function() {
                    const input = icon.previousElementSibling;

                    icon.classList.toggle("hide-password");

                    if (input.type === "password") {
                        input.type = "text";
                    } else {
                        input.type = "password";
                    }
                });
            });
        });

        document.addEventListener("DOMContentLoaded", () => {
            const inputs = document.querySelectorAll(".form__key .code");

            inputs.forEach((input, index) => {

                input.addEventListener("input", () => {
                    input.value = input.value.replace(/\D/g, '').slice(0, 1);

                    if (input.value && index < inputs.length - 1) {
                        inputs[index + 1].focus();
                    }
                });

                input.addEventListener("keydown", (e) => {

                    if (e.key === "Backspace" && !input.value && index > 0) {
                        inputs[index - 1].focus();
                    }

                    if (e.key === "ArrowLeft" && index > 0) {
                        inputs[index - 1].focus();
                    }

                    if (e.key === "ArrowRight" && index < inputs.length - 1) {
                        inputs[index + 1].focus();
                    }
                });

                input.addEventListener("paste", (e) => {
                    const paste = e.clipboardData.getData("text").replace(/\D/g, '').slice(0, inputs.length);
                    if (!paste) return;

                    e.preventDefault();
                    paste.split('').forEach((char, i) => {
                        if (inputs[i]) inputs[i].value = char;
                    });

                    const last = Math.min(paste.length, inputs.length) - 1;
                    if (inputs[last]) inputs[last].focus();
                });
            });
        });
    </script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const customSelects = document.querySelectorAll('.custom-select');

            customSelects.forEach(function(customSelect, index) {
                const trigger = customSelect.querySelector('.custom-select-trigger');
                const spanTrigger = trigger?.querySelector('span');
                const options = customSelect.querySelector('.custom-options');
                const optionItems = Array.from(customSelect.querySelectorAll('.custom-option'));

                if (!trigger || !spanTrigger || !options || optionItems.length === 0) return;
                if (!customSelect.id) customSelect.id = `customSelect_${index}`;
                if (!options.id) options.id = `${customSelect.id}_listbox`;

                const column = customSelect.closest('.form__column') || customSelect.parentElement;
                let hiddenInput = column?.querySelector('input[type="hidden"][data-custom-select]');
                if (!hiddenInput) {
                    hiddenInput = document.createElement('input');
                    hiddenInput.type = 'hidden';
                    hiddenInput.name = customSelect.getAttribute('data-name') || 'customSelect';
                    hiddenInput.setAttribute('data-custom-select', customSelect.id);
                    column?.appendChild(hiddenInput);
                }

                customSelect.setAttribute('role', 'combobox');
                customSelect.setAttribute('aria-haspopup', 'listbox');
                customSelect.setAttribute('aria-controls', options.id);
                customSelect.setAttribute('aria-expanded', 'false');
                customSelect.tabIndex = 0;

                options.setAttribute('role', 'listbox');
                options.setAttribute('aria-hidden', 'true');

                optionItems.forEach((opt, i) => {
                    opt.setAttribute('role', 'option');
                    opt.setAttribute('aria-selected', opt.classList.contains('selected') ? 'true' : 'false');
                    opt.tabIndex = -1;

                    if (!opt.id) opt.id = `${customSelect.id}_opt_${i}`;
                });

                function isOpen() {
                    return options.style.display === 'flex';
                }

                function setOpen(state) {
                    if (state) {
                        closeAllCustomSelects(customSelect);
                        options.style.display = 'flex';
                        customSelect.setAttribute('aria-expanded', 'true');
                        customSelect.classList.toggle('is-open', state);
                        options.setAttribute('aria-hidden', 'false');

                        if (customSelect.id === 'customSelectUp') {
                            options.style.top = 'auto';
                            options.style.bottom = '110%';
                        } else {
                            options.style.top = '110%';
                            options.style.bottom = 'auto';
                        }
                    } else {
                        options.style.display = 'none';
                        options.style.top = '';
                        options.style.bottom = '';
                        customSelect.setAttribute('aria-expanded', 'false');
                        customSelect.classList.toggle('is-open', state);
                        options.setAttribute('aria-hidden', 'true');
                    }
                }

                function getSelectedIndex() {
                    const idx = optionItems.findIndex((el) => el.classList.contains('selected'));
                    return idx >= 0 ? idx : 0;
                }

                function setSelected(optionEl, focusBack = true) {
                    optionItems.forEach((item) => {
                        item.classList.remove('selected');
                        item.setAttribute('aria-selected', 'false');
                    });

                    optionEl.classList.add('selected');
                    optionEl.setAttribute('aria-selected', 'true');

                    spanTrigger.innerHTML = optionEl.innerHTML;
                    if (spanTrigger.classList.contains('placeholder')) {
                        spanTrigger.classList.remove('placeholder');
                    }

                    hiddenInput.value = optionEl.dataset.value || optionEl.textContent.trim();

                    setOpen(false);
                    if (focusBack) customSelect.focus();
                }

                function focusOptionByIndex(i) {
                    const clamped = Math.max(0, Math.min(optionItems.length - 1, i));
                    optionItems[clamped].focus();
                }

                trigger.addEventListener('click', function(e) {
                    e.stopPropagation();
                    setOpen(!isOpen());
                });

                optionItems.forEach(function(option) {
                    option.addEventListener('click', function(e) {
                        e.stopPropagation();
                        setSelected(option);
                    });
                });

                document.addEventListener('click', function(e) {
                    if (!customSelect.contains(e.target)) setOpen(false);
                });

                customSelect.addEventListener('keydown', function(e) {
                    const open = isOpen();

                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        if (!open) {
                            setOpen(true);
                            focusOptionByIndex(getSelectedIndex());
                        } else {
                            const active = document.activeElement;
                            if (active && active.classList.contains('custom-option')) {
                                setSelected(active, true);
                            } else {
                                setOpen(false);
                            }
                        }
                    }

                    if (e.key === 'Escape') {
                        if (open) {
                            e.preventDefault();
                            setOpen(false);
                        }
                    }

                    if (e.key === 'ArrowDown') {
                        e.preventDefault();
                        if (!open) {
                            setOpen(true);
                            focusOptionByIndex(getSelectedIndex());
                        } else {
                            const activeIdx = optionItems.indexOf(document.activeElement);
                            focusOptionByIndex((activeIdx >= 0 ? activeIdx : getSelectedIndex()) + 1);
                        }
                    }

                    if (e.key === 'ArrowUp') {
                        e.preventDefault();
                        if (!open) {
                            setOpen(true);
                            focusOptionByIndex(getSelectedIndex());
                        } else {
                            const activeIdx = optionItems.indexOf(document.activeElement);
                            focusOptionByIndex((activeIdx >= 0 ? activeIdx : getSelectedIndex()) - 1);
                        }
                    }

                    if (e.key === 'Tab' && open) {
                        setOpen(false);
                    }
                });

                optionItems.forEach((opt) => {
                    opt.addEventListener('keydown', (e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            setSelected(opt);
                        }
                        if (e.key === 'Escape') {
                            e.preventDefault();
                            setOpen(false);
                            customSelect.focus();
                        }
                    });
                });
            });

            function closeAllCustomSelects(exceptSelect) {
                const allSelects = document.querySelectorAll('.custom-select');
                allSelects.forEach((sel) => {
                    if (sel === exceptSelect) return;
                    const opts = sel.querySelector('.custom-options');
                    if (!opts) return;
                    opts.style.display = 'none';
                    opts.style.top = '';
                    opts.style.bottom = '';
                    sel.setAttribute('aria-expanded', 'false');
                    opts.setAttribute('aria-hidden', 'true');
                });
            }
        });
    </script>
</body>

</html>