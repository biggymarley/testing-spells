export const fetchSpells = async () => {
    const url = 'https://api.airtable.com/v0/appO4uUOp7NFkZkMh/Spells?view=Spells';
    const options = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer patURZ9Wt83lP6Fbk.94b23f8a5d8d9b08c8361ea8e7535220964bd41f119a2116b7549464cd852f9a'
      }
    };
  
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };