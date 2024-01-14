function converterMoeda() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from').value;
    const toCurrency = document.getElementById('to').value;

    // Taxas de conversÃ£o fictÃ­cias para exemplo
    const taxaConversao = {
        usd: {
            eur: 0.85,
            gbp: 0.73,
            jpy: 112.14,
            aud: 1.36,
            brl: 5.32, // Taxa fictÃ­cia para BRL
        },
        eur: {
            usd: 1.18,
            gbp: 0.86,
            jpy: 133.27,
            aud: 1.62,
            brl: 6.25, // Taxa fictÃ­cia para BRL
        },
        gbp: {
            usd: 1.37,
            eur: 1.16,
            jpy: 154.86,
            aud: 1.88,
            brl: 7.12, // Taxa fictÃ­cia para BRL
        },
        jpy: {
            usd: 0.0089,
            eur: 0.0075,
            gbp: 0.0065,
            aud: 0.012,
            brl: 0.19, // Taxa fictÃ­cia para BRL
        },
        aud: {
            usd: 0.74,
            eur: 0.62,
            gbp: 0.53,
            jpy: 81.91,
            brl: 4.92, // Taxa fictÃ­cia para BRL
        },
        brl: {
            usd: 0.19,
            eur: 0.16,
            gbp: 0.14,
            jpy: 5.28,
            aud: 0.20, // Taxa fictÃ­cia para BRL
        },
    };

    if (isNaN(amount)) {
        alert('Por favor, insira um valor numérico.');
        return;
    }

    if (!taxaConversao[fromCurrency] || !taxaConversao[fromCurrency][toCurrency]) {
        alert('Conversão não suportada.');
        return;
    }

    const resultado = amount * taxaConversao[fromCurrency][toCurrency];
    document.getElementById('resultado').innerHTML = `${amount.toFixed(2)} ${fromCurrency.toUpperCase()} = ${resultado.toFixed(2)} ${toCurrency.toUpperCase()}`;
}