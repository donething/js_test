async function fetchBaiduHomepage(): Promise<void> {
  try {
    const response = await fetch('https://www.baidu.com');
    if (response.ok) {
      const html = await response.text();
      console.log('Baidu Homepage Content:', html);
    } else {
      console.error('Failed to fetch Baidu homepage:', response.status, response.statusText);
    }
  } catch (error) {
    console.error('Error fetching Baidu homepage:', error);
  }
}

export default fetchBaiduHomepage