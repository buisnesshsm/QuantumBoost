
function parseSpecialFormat(text) {
  return text.replace(/\*(.*?)\*/g, '<strong class="text-blue-400 font-bold">$1</strong>');
}

// Apply formatting to purchase message and features
const originalSetPurchaseMessage = purchaseMessage => {
  purchaseMessage.innerHTML = parseSpecialFormat(purchaseMessage.innerHTML);
};

// Override or add message rendering using innerHTML where needed


    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "your-crisp-website-id";
    (function () {
      var d = document;
      var s = d.createElement("script");
      s.src = "https://client.crisp.chat/l.js";
      s.async = true;
      d.getElementsByTagName("head")[0].appendChild(s);
    })();
  


    // Existing Purchase Modal JavaScript
    const purchaseModal = document.getElementById('purchaseModal');
    const modalProductName = document.getElementById('modalProductName');
    const modalPrice = document.getElementById('modalPrice');
    const purchaseMessage = document.getElementById('purchaseMessage');

    const stepPlanSelection = document.getElementById('stepPlanSelection');
    const stepDetailsPad = document.getElementById('stepDetailsPad');

    const planOptions = document.getElementById('planOptions');
    const continueBtn = document.getElementById('continueBtn');

    const payCreditCardBtn = document.getElementById('payCreditCard');
    const payCryptoBtn = document.getElementById('payCrypto');
    const confirmPurchaseBtn = document.getElementById('confirmPurchaseBtn');

    let currentProduct = '';
    let basePrice = 0;
    let selectedPlan = null;
    let selectedPaymentMethod = null;
    let planPrices = {};

    const plans = [
      { label: "1 Day", multiplier: 0.3 },
      { label: "7 Days", multiplier: 1 },
      { label: "1 Month", multiplier: 3.5 },
      { label: "Lifetime", multiplier: 10 }
    ];

    function openPurchaseModal(button) {
      currentProduct = button.dataset.product;
      basePrice = parseFloat(button.dataset.baseprice);
      modalProductName.textContent = currentProduct;
      purchaseMessage.textContent = '';
      selectedPlan = null;
      selectedPaymentMethod = null;
      confirmPurchaseBtn.disabled = true;
      continueBtn.disabled = true;

      // Reset payment buttons styles
      payCreditCardBtn.classList.remove('bg-green-700');
      payCreditCardBtn.classList.add('bg-green-600');
      payCryptoBtn.classList.remove('bg-green-600');
      payCryptoBtn.classList.add('bg-gray-700');

      // Reset forms
      document.getElementById('detailsForm').reset();

      // Show plan selection and hide details pad
      stepPlanSelection.classList.remove('hidden');
      stepDetailsPad.classList.add('hidden');

      // Clear existing plan buttons
      planOptions.innerHTML = '';

      plans.forEach((plan) => {
        const price = (basePrice * plan.multiplier).toFixed(2);
        planPrices[plan.label] = price;

        const btn = document.createElement('button');
        btn.type = 'button';
        btn.textContent = `${plan.label} - $${price}`;
        btn.className = 'px-4 py-2 rounded-xl border border-gray-700 hover:border-green-500 transition font-semibold';
        btn.onclick = () => selectPlan(plan.label);

        planOptions.appendChild(btn);
      });

      modalPrice.textContent = '$0.00';

      purchaseModal.classList.add('show'); // Use 'show' class for display
    }

    function closePurchaseModal() {
      purchaseModal.classList.remove('show');
    }

    function selectPlan(planLabel) {
      selectedPlan = planLabel;

      // Highlight selected plan button
      Array.from(planOptions.children).forEach(btn => {
        btn.classList.remove('border-green-500', 'bg-green-900');
        if (btn.textContent.startsWith(planLabel)) {
          btn.classList.add('border-green-500', 'bg-green-900');
        }
      });

      modalPrice.textContent = `$${planPrices[selectedPlan]}`;
      continueBtn.disabled = false;
    }

    function goToDetailsStep() {
      stepPlanSelection.classList.add('hidden');
      stepDetailsPad.classList.remove('hidden');
      confirmPurchaseBtn.disabled = true;
      selectedPaymentMethod = null;

      // Reset payment buttons style on step open
      payCreditCardBtn.classList.remove('bg-green-700');
      payCreditCardBtn.classList.add('bg-green-600');
      payCryptoBtn.classList.remove('bg-green-600');
      payCryptoBtn.classList.add('bg-gray-700');

      purchaseMessage.textContent = '';
    }

    function selectPaymentMethod(method) {
      selectedPaymentMethod = method;

      if (method === 'Credit/Debit Card') {
        payCreditCardBtn.classList.add('bg-green-700');
        payCryptoBtn.classList.remove('bg-green-600');
        payCryptoBtn.classList.add('bg-gray-700');
      } else if (method === 'Crypto') {
        payCryptoBtn.classList.add('bg-green-600');
        payCreditCardBtn.classList.remove('bg-green-700');
        payCreditCardBtn.classList.add('bg-green-600');
      }

      confirmPurchaseBtn.disabled = false;
    }

    function handleDetailsSubmit(event) {
      event.preventDefault();

      const firstName = event.target.firstName.value.trim();
      const lastName = event.target.lastName.value.trim();
      const email = event.target.emailDetails.value.trim();

      if (!firstName || !lastName || !email || !selectedPaymentMethod) {
        purchaseMessage.textContent = 'Please complete all fields and select a payment method.';
        purchaseMessage.classList.add('text-red-500');
        return;
      }

      purchaseMessage.textContent = '';
      purchaseMessage.classList.remove('text-red-500');

      // For now just log the purchase info (you can integrate payment API here)
      console.log({
        product: currentProduct,
        plan: selectedPlan,
        price: planPrices[selectedPlan],
        firstName,
        lastName,
        email,
        paymentMethod: selectedPaymentMethod
      });

      purchaseMessage.textContent = `Thank you, ${firstName}! Your order for ${currentProduct} (${selectedPlan}) using ${selectedPaymentMethod} is being processed.`;
      purchaseMessage.classList.add('text-green-400');

      // Optionally, disable the form to prevent multiple submissions
      confirmPurchaseBtn.disabled = true;
    }

    // New ESP UI JavaScript (simplified as no toggle button)
    const skeletonModel = document.getElementById('skeletonModel');
    const skeletonLimbs = document.getElementById('skeletonLimbs');
    const healthBar = document.getElementById('healthBar');
    const distanceText = document.getElementById('distanceText');

    const toggleBoxEsp = document.getElementById('toggleBoxEsp');
    const toggleSkeletonEsp = document.getElementById('toggleSkeletonEsp');
    const toggleHealthBar = document.getElementById('toggleHealthBar');
    const toggleDistance = document.getElementById('toggleDistance');
    const togglePenisEsp = document.getElementById('togglePenisEsp');

    // Function to update the visual state of elements based on toggle
    function updateEspVisuals() {
      // Box ESP
      if (toggleBoxEsp.checked) {
        skeletonModel.classList.add('show-box');
      } else {
        skeletonModel.classList.remove('show-box');
      }

      // Skeleton ESP
      if (toggleSkeletonEsp.checked) {
        skeletonLimbs.classList.remove('hidden-limbs');
      } else {
        skeletonLimbs.classList.add('hidden-limbs');
      }

      // Health Bar
      if (toggleHealthBar.checked) {
        healthBar.style.opacity = '1';
      } else {
        healthBar.style.opacity = '0';
      }

      // Distance
      if (toggleDistance.checked) {
        distanceText.classList.remove('hidden-distance');
      } else {
        distanceText.classList.add('hidden-distance');
      }

      // Penis ESP - using class on skeleton to modify head's border/shadow
      if (togglePenisEsp.checked) {
        skeletonModel.classList.add('penis-esp');
      } else {
        skeletonModel.classList.remove('penis-esp');
      }
    }

    // Add event listeners to all toggle switches for ESP UI
    toggleBoxEsp.addEventListener('change', updateEspVisuals);
    toggleSkeletonEsp.addEventListener('change', updateEspVisuals);
    toggleHealthBar.addEventListener('change', updateEspVisuals);
    toggleDistance.addEventListener('change', updateEspVisuals);
    togglePenisEsp.addEventListener('change', updateEspVisuals);

    // Initial call to set the correct state for ESP visuals based on default checkbox values
    updateEspVisuals();


    // New Features Modal JavaScript
    const featuresModal = document.getElementById('featuresModal');
    const featuresModalProductName = document.getElementById('featuresModalProductName');
    const featuresList = document.getElementById('featuresList');

    function openFeaturesModal(button) {
      const productName = button.dataset.product;
      const features = JSON.parse(button.dataset.features); // Parse the JSON string

      featuresModalProductName.textContent = `${productName} Features`;
      featuresList.innerHTML = ''; // Clear previous features

      features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
      });

      featuresModal.classList.add('show');
    }

    function closeFeaturesModal() {
      featuresModal.classList.remove('show');
    }
  