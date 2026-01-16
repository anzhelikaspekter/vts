document.addEventListener('DOMContentLoaded', function () {
    const customSelects = document.querySelectorAll('.custom-select');

    customSelects.forEach(function (customSelect, index) {
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
                options.setAttribute('aria-hidden', 'false');

                // твоя логика позиционирования
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

        trigger.addEventListener('click', function (e) {
            e.stopPropagation();
            setOpen(!isOpen());
        });

        optionItems.forEach(function (option) {
            option.addEventListener('click', function (e) {
                e.stopPropagation();
                setSelected(option);
            });
        });

        document.addEventListener('click', function (e) {
            if (!customSelect.contains(e.target)) setOpen(false);
        });

        customSelect.addEventListener('keydown', function (e) {
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

            if (e.key === 'Tab' && open) {открытым
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
