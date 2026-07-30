document.addEventListener('DOMContentLoaded', function () {

    // ─── Smooth Scroll ───
    function scrollToSection(id) {
        var el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    // Expose globally so inline onclick handlers can call it
    window.scrollToSection = scrollToSection;

    // ─── Year ───
    var yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // ─── Navbar Scroll ───
    var navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
    });

    // ─── Mobile Menu ───
    function toggleMobile() {
        var menu = document.getElementById('mobileMenu');
        var open = document.getElementById('menuOpen');
        var close = document.getElementById('menuClose');
        if (menu.classList.contains('open')) {
            menu.classList.remove('open');
            open.style.display = '';
            close.style.display = 'none';
        } else {
            menu.classList.add('open');
            open.style.display = 'none';
            close.style.display = '';
        }
    }
    function closeMobile() {
        document.getElementById('mobileMenu').classList.remove('open');
        document.getElementById('menuOpen').style.display = '';
        document.getElementById('menuClose').style.display = 'none';
    }
    window.toggleMobile = toggleMobile;
    window.closeMobile = closeMobile;

    // ─── Toast ───
    var toastTimer;

    var successIconSVG = '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>';
    var errorIconSVG   = '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>';

    function showToast(msg, type) {
        type = type || 'success';
        var toast = document.getElementById('toast');
        var toastIcon = toast.querySelector('.toast-icon');
        var toastMsg = document.getElementById('toastMsg');

        toastIcon.innerHTML = (type === 'error') ? errorIconSVG : successIconSVG;
        toastMsg.textContent = msg;
        toast.className = 'toast ' + type;
        toast.style.display = 'flex';
        clearTimeout(toastTimer);
        toastTimer = setTimeout(hideToast, 4000);
    }
    function hideToast() {
        document.getElementById('toast').style.display = 'none';
    }
    window.showToast = showToast;
    window.hideToast = hideToast;

    // ─── Booking Modal ───
    function openBooking(cls, time, trainer) {
        document.getElementById('bookClass').textContent = cls;
        document.getElementById('bookTime').textContent = time;
        document.getElementById('bookTrainer').textContent = trainer;
        document.getElementById('bookingModal').style.display = 'flex';
    }
    function closeBookingModal() {
        document.getElementById('bookingModal').style.display = 'none';
    }
    function submitBooking(e) {
        e.preventDefault();
        var btn = document.getElementById('bookBtn');
        btn.textContent = 'Booking...';
        btn.disabled = true;
        setTimeout(function () {
            btn.textContent = 'Confirm Booking';
            btn.disabled = false;
            closeBookingModal();
            showToast('Slot booked! We will confirm via WhatsApp.');
        }, 1000);
    }
    window.openBooking = openBooking;
    window.closeBookingModal = closeBookingModal;
    window.submitBooking = submitBooking;

    // ─── Policy Modal ───
    function showPolicy(title) {
        document.getElementById('policyTitle').textContent = title;
        var text = title === 'Privacy Policy'
            ? 'Your privacy is important to us. The Calcutta Fitness Studio collects minimal personal data necessary to provide our services. We do not sell or share your information with third parties. Contact us at info@calcuttafitness.com for any privacy-related queries.'
            : 'By using our services, you agree to follow gym rules and regulations. Membership fees are non-refundable. All members must complete a health declaration before starting any program. TCF reserves the right to modify pricing and schedules. Contact us for the full terms document.';
        document.getElementById('policyText').textContent = text;
        document.getElementById('policyModal').style.display = 'flex';
    }
    function closePolicyModal() {
        document.getElementById('policyModal').style.display = 'none';
    }
    window.showPolicy = showPolicy;
    window.closePolicyModal = closePolicyModal;

    // ─── BMI Calculator ───
    function calcBMI(e) {
        e.preventDefault();
        var w   = parseFloat(document.getElementById('bmiW').value);
        var h   = parseFloat(document.getElementById('bmiH').value) / 100;
        var age = parseInt(document.getElementById('bmiA').value, 10);
        var sex = document.getElementById('bmiS').value;

        if (w > 0 && h > 0 && age > 0) {
            var bmi = w / (h * h);
            var cat = '', color = '', msg = '';

            if (bmi < 18.5) {
                cat   = 'Underweight';
                color = '#F5A623';
                msg   = sex === 'female'
                    ? 'Building lean muscle mass is key. Our female strength coaches will design the perfect hypertrophy program for your body type.'
                    : 'You need to build solid mass. Our strength coaches can construct the perfect bulk program for your age and goals.';
            } else if (bmi < 24.9) {
                cat   = 'Optimal';
                color = '#22c55e';
                msg   = age < 30
                    ? 'Excellent baseline. Time to focus on performance, strength, and peak athletic conditioning.'
                    : 'Great shape for your age. Focus on strength maintenance, mobility, and performance optimisation.';
            } else if (bmi < 29.9) {
                cat   = 'Overweight';
                color = '#F5A623';
                msg   = sex === 'female'
                    ? 'A perfect starting point for a cutting phase. Our HIIT and yoga programs are tailored for you.'
                    : 'A perfect starting point for a cutting phase. Join our high-intensity programs and watch the results.';
            } else {
                cat   = 'Obese';
                color = '#E8272A';
                msg   = 'The hardest step is starting. We have the expertise to guide your complete transformation — safely and effectively.';
            }

            document.getElementById('bmiValue').textContent = bmi.toFixed(1);
            var catEl = document.getElementById('bmiCategory');
            catEl.textContent       = cat;
            catEl.style.borderColor = color;
            catEl.style.color       = color;
            document.getElementById('bmiMessage').textContent = msg;
            document.getElementById('bmiResult').classList.add('show');
        }
    }
    window.calcBMI = calcBMI;

    // ─── Schedule ───
    var days      = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var activeDay = 'Monday';

    function renderScheduleDays() {
        var container = document.getElementById('scheduleDays');
        container.innerHTML = '';
        days.forEach(function (day) {
            var btn = document.createElement('button');
            btn.innerHTML = '<span>' + day + '</span>';
            if (day === activeDay) btn.className = 'active';
            btn.onclick = function () {
                activeDay = day;
                renderScheduleDays();
                renderScheduleTable();
            };
            container.appendChild(btn);
        });
    }

    function generateSchedule(day) {
        return [
            { time: '06:00 - 07:00 AM', cls: 'Strength Training',                                       trainer: 'Arjun Das',    type: 'Weights'   },
            { time: '08:00 - 09:00 AM', cls: (day === 'Tuesday' || day === 'Thursday') ? 'CrossFit' : 'Yoga & Flex', trainer: 'Priya Sen',    type: 'Endurance' },
            { time: '05:30 - 06:30 PM', cls: 'Cardio Blast',                                             trainer: 'Neha Roy',     type: 'Cardio'    },
            { time: '07:30 - 09:00 PM', cls: 'Boxing & MMA',                                             trainer: 'Vikram Singh', type: 'Combat'    }
        ];
    }

    function renderScheduleTable() {
        var container = document.getElementById('scheduleTable');
        var slots     = generateSchedule(activeDay);
        container.innerHTML = '';
        slots.forEach(function (slot) {
            var div       = document.createElement('div');
            div.className = 'schedule-slot';
            div.innerHTML =
                '<div class="time"><p class="bebas">'  + slot.time + '</p></div>' +
                '<div class="class-info"><h4>'         + slot.cls  + '</h4><span class="type-badge">' + slot.type + '</span></div>' +
                '<div class="trainer"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg><span>' + slot.trainer + '</span></div>' +
                '<button class="book-btn" onclick="openBooking(\'' + slot.cls + '\',\'' + slot.time + '\',\'' + slot.trainer + '\')">Book Slot</button>';
            container.appendChild(div);
        });
    }

    renderScheduleDays();
    renderScheduleTable();

    // ─── Pricing ───
    var isAnnual = false;

    function setPricing(annual) {
        isAnnual = annual;
        document.getElementById('monthlyBtn').className = annual ? '' : 'active';
        document.getElementById('annualBtn').className  = annual ? 'active' : '';
        renderPricing();
    }

    function renderPricing() {
        var plans = [
            {
                name: 'Basic',
                price: isAnnual ? 14400 : 1500,
                period: isAnnual ? '/year' : '/mo',
                desc: 'Perfect for beginners establishing a routine.',
                features: ['Access to gym equipment', 'Locker room access', '1 Free Assessment', 'Standard Support'],
                popular: false
            },
            {
                name: 'Standard',
                price: isAnnual ? 24000 : 2500,
                period: isAnnual ? '/year' : '/mo',
                desc: 'Our most popular plan for dedicated athletes.',
                features: ['All Basic features', 'Access to all group classes', 'Monthly body assessment', 'Basic Diet Plan', 'Priority Support'],
                popular: true
            },
            {
                name: 'Premium',
                price: isAnnual ? 38400 : 4000,
                period: isAnnual ? '/year' : '/mo',
                desc: 'The ultimate transformation package.',
                features: ['All Standard features', '2 PT Sessions / month', 'Custom Nutrition Plan', 'Recovery Area Access', 'Guest Pass (2/mo)'],
                popular: false
            }
        ];

        var container = document.getElementById('pricingGrid');
        container.innerHTML = '';
        plans.forEach(function (plan) {
            var card       = document.createElement('div');
            card.className = 'pricing-card' + (plan.popular ? ' popular' : '');

            var featuresHtml = '';
            plan.features.forEach(function (f) {
                featuresHtml += '<li><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg><span>' + f + '</span></li>';
            });

            card.innerHTML =
                (plan.popular ? '<div class="popular-badge">Most Popular</div>' : '') +
                '<h3 class="bebas">'       + plan.name + '</h3>' +
                '<p class="desc">'         + plan.desc + '</p>' +
                '<div class="price-row"><span class="currency">&#8377;</span><span class="amount bebas">' + plan.price.toLocaleString('en-IN') + '</span><span class="period">' + plan.period + '</span></div>' +
                '<ul class="features">'   + featuresHtml + '</ul>' +
                '<button class="btn-pricing" onclick="joinPlan(\'' + plan.name + '\')">Join ' + plan.name + '</button>';
            container.appendChild(card);
        });
    }

    function joinPlan(name) {
        scrollToSection('contact');
        showToast(name + ' plan selected! Fill in the form below to get started.');
    }

    renderPricing();
    window.setPricing  = setPricing;
    window.joinPlan    = joinPlan;

    // ─── Contact Form ───
    function submitContact(e) {
        e.preventDefault();
        var name  = document.getElementById('cName').value.trim();
        var phone = document.getElementById('cPhone').value.trim();
        var email = document.getElementById('cEmail').value.trim();
        var msg   = document.getElementById('cMsg').value.trim();
        var valid = true;

        // Clear previous errors
        ['cName', 'cPhone', 'cEmail', 'cMsg'].forEach(function (id) {
            document.getElementById(id + 'Err').textContent = '';
            document.getElementById(id).classList.remove('error');
        });

        if (!name) {
            document.getElementById('cNameErr').textContent = 'Name is required';
            document.getElementById('cName').classList.add('error');
            valid = false;
        }

        if (!phone) {
            document.getElementById('cPhoneErr').textContent = 'Phone is required';
            document.getElementById('cPhone').classList.add('error');
            valid = false;
        } else if (!/^[+]?[0-9]{1,4}[\s\-]?[(]?[0-9]{1,4}[)]?[\s\-]?[0-9]{3,4}[\s\-]?[0-9]{3,4}$/.test(phone)) {
            document.getElementById('cPhoneErr').textContent = 'Enter a valid phone number';
            document.getElementById('cPhone').classList.add('error');
            valid = false;
        }

        if (!email) {
            document.getElementById('cEmailErr').textContent = 'Email is required';
            document.getElementById('cEmail').classList.add('error');
            valid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            document.getElementById('cEmailErr').textContent = 'Enter a valid email';
            document.getElementById('cEmail').classList.add('error');
            valid = false;
        }

        if (!msg) {
            document.getElementById('cMsgErr').textContent = 'Message is required';
            document.getElementById('cMsg').classList.add('error');
            valid = false;
        }

        if (!valid) return;

        var btn = document.getElementById('contactBtn');
        btn.innerHTML = '<div class="spinner"></div> Sending...';
        btn.disabled  = true;

        setTimeout(function () {
            btn.innerHTML = 'Send Message <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';
            btn.disabled  = false;
            document.getElementById('cName').value  = '';
            document.getElementById('cPhone').value = '';
            document.getElementById('cEmail').value = '';
            document.getElementById('cMsg').value   = '';
            showToast('Message sent! We\'ll get back to you within 24 hours.');
        }, 1200);
    }
    window.submitContact = submitContact;

}); // end DOMContentLoaded