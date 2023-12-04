type DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
}

export const formatDate = (date: string): string => {
    const newDate = new Date(date);
    const options: DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    return newDate.toLocaleDateString('en-Us', options);
};