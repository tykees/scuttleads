export default async function handler(req, res) {
    const { domain } = req.query;
  
    // Make a request to a domain availability API
    const apiKey = process.env.DOMAIN_API_KEY;
    const apiUrl = `https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=at_ZRI5RJiRU1pHrJziiplMsQVRCS6A5&domainName=google.com=${domain}`;
  
    try {
      const response = await fetch(apiUrl, {
        headers: {
          Authorization: `sso-key ${apiKey}`,
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        res.status(200).json({ available: data.available });
      } else {
        res.status(response.status).json({ message: 'Error checking domain' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  }
  