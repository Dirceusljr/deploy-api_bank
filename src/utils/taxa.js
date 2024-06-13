const taxa = (forma_pagamento, valor) => {
    let taxa = 0;
    switch (forma_pagamento) {
        case 'C':
            taxa = 0.05;
            break;
        case 'D':
            taxa = 0.03;
            break;
        case 'P':
            taxa = 0;
            break;
        default:
            throw new Error('Forma de pagamento inválida');
    }

    return (valor * (1 + taxa)).toFixed(2);
}

export default taxa;