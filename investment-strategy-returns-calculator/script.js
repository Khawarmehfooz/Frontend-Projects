const annualCashFlow = document.getElementById('annual-cash-flow');
const annualCashFlowOutputBox = document.getElementById('annual-cash-flow-output');
annualCashFlowOutputBox.innerText = annualCashFlow.value;
annualCashFlow.addEventListener('input', () => {
    annualCashFlowOutputBox.innerText = annualCashFlow.value;
})

const annualAppreciation = document.getElementById('annual-appreciation');
const annualAppreciationOutputBox = document.getElementById('annual-appreciation-output')
annualAppreciationOutputBox.innerText = annualAppreciation.value;
annualAppreciation.addEventListener('input', () => {
    annualAppreciationOutputBox.innerText = annualAppreciation.value;

})