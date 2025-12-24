export const formatCurrency = (amount: number, currency = 'LKR'): string => {
    return new Intl.NumberFormat('en-LK', {
        style: 'currency',
        currency,
    }).format(amount);
};

export const formatDate = (date: string | Date): string => {
    const d = new Date(date);
    if (isNaN(d.getTime())) return ''; // or return 'Invalid date'
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    }).format(d);
};

export const formatPhoneNumber = (phone: string): string => {
    const cleaned = phone.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}`;
    }
    return phone;
};