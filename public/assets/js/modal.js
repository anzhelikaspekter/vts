document.addEventListener('DOMContentLoaded', function () {
    var firstModal = document.getElementById('myModal');
    var depositModal = document.getElementById('depositModal');
    var depositAddressModal = document.getElementById('depositAddressModal');
    var langModal = document.getElementById('langModal');
    var lequidityModal = document.getElementById('lequidityModal');
    var menuModal = document.getElementById('menuModal');
    var fundsModal = document.getElementById('fundsModal');
    var congratModal = document.getElementById('congratModal');
    var notificationModal = document.getElementById('notificationModal');
    var faModal = document.getElementById('faModal');
    var withdrawModal = document.getElementById('withdrawModal');
    var withdrawVerifiModal = document.getElementById('withdrawVerifiModal');
    var withdrawCongratsModal = document.getElementById('withdrawCongratsModal');
    var exchangeModal = document.getElementById('exchangeModal');
    var exchangeCongratModal = document.getElementById('exchangeCongratModal');
    var refferalMoreModal = document.getElementById('refferalMoreModal');
    var shareModal = document.getElementById('shareModal');
    var levelCongratModal = document.getElementById('levelCongratModal');
    var bonusCongratModal = document.getElementById('bonusCongratModal');
    var partnerListModal = document.getElementById('partnerListModal');
    var lineInfoModal = document.getElementById('lineInfoModal');

    var firstButtons = document.querySelectorAll('.modal-trigger');
    var depositButtons = document.querySelectorAll('.deposit-modal-trigger');
    var depositAddressButtons = document.querySelectorAll('.deposit-address-modal-trigger');
    var langButtons = document.querySelectorAll('.lang-modal-trigger');
    var lequidityButtons = document.querySelectorAll('.lequidity-modal-trigger');
    var menuButtons = document.querySelectorAll('.menu-modal-trigger');
    var fundsButtons = document.querySelectorAll('.funds-modal-trigger');
    var congratButtons = document.querySelectorAll('.congrat-modal-trigger');
    var notificationButtons = document.querySelectorAll('.notification-modal-trigger');
    var faButtons = document.querySelectorAll('.fa-modal-trigger');
    var withdrawButtons = document.querySelectorAll('.withdraw-modal-trigger');
    var withdrawVerifiButtons = document.querySelectorAll('.withdraw-verifi-modal-trigger');
    var withdrawCongratsButtons = document.querySelectorAll('.withdraw-congrats-modal-trigger');
    var exchangeButtons = document.querySelectorAll('.exchange-modal-trigger');
    var exchangeCongratButtons = document.querySelectorAll('.exchange-congrat-modal-trigger');
    var refferalMoreButtons = document.querySelectorAll('.refferal-more-modal-trigger');
    var shareButtons = document.querySelectorAll('.share-modal-trigger');
    var levelCongratButtons = document.querySelectorAll('.level-congrat-modal-trigger');
    var bonusCongratButtons = document.querySelectorAll('.bonus-congrat-modal-trigger');
    var partnerListButtons = document.querySelectorAll('.partner-list-modal-trigger');
    var lineInfoButtons = document.querySelectorAll('.line-info-modal-trigger');

    var closeButtons = document.querySelectorAll('.close-btn');
    var closeDepositButtons = document.querySelectorAll('.close-deposit-btn');
    var closeDepositAddressButtons = document.querySelectorAll('.close-deposit-address-btn');
    var closeLangButtons = document.querySelectorAll('.close-lang-btn');
    var closeLequidityButtons = document.querySelectorAll('.close-lequidity-btn');
    var closeMenuButtons = document.querySelectorAll('.close-menu-btn');
    var closeFundsButtons = document.querySelectorAll('.close-funds-btn');
    var closeCongratButtons = document.querySelectorAll('.close-congrat-btn');
    var closeNotificationButtons = document.querySelectorAll('.close-notification-btn');
    var closeFAButtons = document.querySelectorAll('.close-fa-btn');
    var closeWithdrawButtons = document.querySelectorAll('.close-withdraw-btn');
    var closeWithdrawVerifiButtons = document.querySelectorAll('.close-withdraw-verifi-btn');
    var closeWithdrawCongratsButtons = document.querySelectorAll('.close-withdraw-congrats-btn');
    var closeExchangeButtons = document.querySelectorAll('.close-exchange-btn');
    var closeExchangeCongratButtons = document.querySelectorAll('.close-exchange-congrat-btn');
    var closeRefferalMoreButtons = document.querySelectorAll('.close-refferal-more-btn');
    var closeShareButtons = document.querySelectorAll('.close-share-btn');
    var closeLevelCongratButtons = document.querySelectorAll('.close-level-congrat-btn');
    var closeBonusCongratButtons = document.querySelectorAll('.close-bonus-congrat-btn');
    var closePartnerListButtons = document.querySelectorAll('.close-partner-list-btn');
    var closeLineInfoButtons = document.querySelectorAll('.close-line-info-btn');

    // Переменная для хранения текущей открытой модалки
    var currentOpenModal = null;

    // Функция открытия модалки с проверкой
    function openModal(modal) {
        if (currentOpenModal) {
            closeModal(currentOpenModal, false); // Закрываем текущую модалку без перенаправления
        }
        modal.style.display = "flex";
        currentOpenModal = modal; // Устанавливаем текущую модалку как открытую
        sessionStorage.setItem('returnUrl', window.location.href);
    }

    // Функция закрытия модалки с опциональным перенаправлением
    function closeModal(modal, shouldRedirect = true) {
        modal.style.display = "none";
        currentOpenModal = null; // Сбрасываем текущую открытую модалку

        if (shouldRedirect) {
            var returnUrl = sessionStorage.getItem('returnUrl') || 'dashboard.php';
            window.location.href = returnUrl;
        }
    }

    // Обработчики открытия модалок
    firstButtons.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            event.preventDefault();
            openModal(firstModal);
        });
    });

    depositButtons.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            event.preventDefault();
            openModal(depositModal);
        });
    });

    depositAddressButtons.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            event.preventDefault();
            openModal(depositAddressModal);
        });
    });

    langButtons.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            event.preventDefault();
            openModal(langModal);
        });
    });

    lequidityButtons.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            event.preventDefault();
            openModal(lequidityModal);
        });
    });

    menuButtons.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            event.preventDefault();
            openModal(menuModal);
        });
    });

    fundsButtons.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            event.preventDefault();
            openModal(fundsModal);
        });
    });

    congratButtons.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            event.preventDefault();
            openModal(congratModal);
        });
    });

    notificationButtons.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            event.preventDefault();
            openModal(notificationModal);
        });
    });

    faButtons.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            event.preventDefault();
            openModal(faModal);
        });
    });

    withdrawButtons.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            event.preventDefault();
            openModal(withdrawModal);
        });
    });

    withdrawVerifiButtons.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            event.preventDefault();
            openModal(withdrawVerifiModal);
        });
    });

    withdrawCongratsButtons.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            event.preventDefault();
            openModal(withdrawCongratsModal);
        });
    });

    exchangeButtons.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            event.preventDefault();
            openModal(exchangeModal);
        });
    });

    exchangeCongratButtons.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            event.preventDefault();
            openModal(exchangeCongratModal);
        });
    });

    refferalMoreButtons.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            event.preventDefault();
            openModal(refferalMoreModal);
        });
    });

    shareButtons.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            event.preventDefault();
            openModal(shareModal);
        });
    });

    levelCongratButtons.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            event.preventDefault();
            openModal(levelCongratModal);
        });
    });

    bonusCongratButtons.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            event.preventDefault();
            openModal(bonusCongratModal);
        });
    });

    partnerListButtons.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            event.preventDefault();
            openModal(partnerListModal);
        });
    });

    lineInfoButtons.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            event.preventDefault();
            openModal(lineInfoModal);
        });
    });

    // Обработчики закрытия модалок
    closeButtons.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            event.preventDefault();
            closeModal(firstModal);
        });
    });

    closeDepositButtons.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            event.preventDefault();
            closeModal(depositModal);
        });
    });

    closeDepositAddressButtons.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            event.preventDefault();
            closeModal(depositAddressModal);
        });
    });

    closeLangButtons.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            event.preventDefault();
            closeModal(langModal);
        });
    });

    closeLequidityButtons.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            event.preventDefault();
            closeModal(lequidityModal);
        });
    });

    closeMenuButtons.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            event.preventDefault();
            closeModal(menuModal);
        });
    });

    closeFundsButtons.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            event.preventDefault();
            closeModal(fundsModal);
        });
    });

    closeCongratButtons.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            event.preventDefault();
            closeModal(congratModal);
        });
    });

    closeExchangeCongratButtons.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            event.preventDefault();
            closeModal(exchangeCongratModal);
        });
    });

    closeNotificationButtons.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            event.preventDefault();
            closeModal(notificationModal);
        });
    });

    closeFAButtons.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            event.preventDefault();
            closeModal(faModal);
        });
    });

    closeWithdrawButtons.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            event.preventDefault();
            closeModal(withdrawVerifiModal);
        });
    });

    closeWithdrawVerifiButtons.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            event.preventDefault();
            closeModal(withdrawCongratsModal);
        });
    });

    closeWithdrawCongratsButtons.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            event.preventDefault();
            closeModal(withdrawCongratsModal);
        });
    });

    closeExchangeButtons.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            event.preventDefault();
            closeModal(exchangeModal);
        });
    });

    closeRefferalMoreButtons.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            event.preventDefault();
            closeModal(refferalMoreModal);
        });
    });

    closeShareButtons.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            event.preventDefault();
            closeModal(shareModal);
        });
    });

    closeLevelCongratButtons.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            event.preventDefault();
            closeModal(levelCongratModal);
        });
    });

    closeBonusCongratButtons.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            event.preventDefault();
            closeModal(bonusCongratModal);
        });
    });

    closePartnerListButtons.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            event.preventDefault();
            closeModal(partnerListModal);
        });
    });

    closeLineInfoButtons.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            event.preventDefault();
            closeModal(lineInfoModal);
        });
    });
});