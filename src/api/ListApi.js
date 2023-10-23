const getEmailList = async () => {
  try {
    const response = await fetch('https://flipkart-email-mock.vercel.app/');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.list;
  } catch (error) {
    console.error('Error fetching email data:', error);
    throw error;
  }
};

export { getEmailList };