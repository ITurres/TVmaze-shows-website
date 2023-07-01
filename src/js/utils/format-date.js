const formatDate = (date) => {
  const dateFormatted = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
  return dateFormatted;
};

export default formatDate;
