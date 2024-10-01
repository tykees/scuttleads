'use client'
import { useState } from 'react';

const DomainSearch = () => {
  const [domain, setDomain] = useState('');
  const [availability, setAvailability] = useState('');

  const checkDomain = async () => {
    const response = await fetch(`/api/check-domain?domain=${domain}`);
    const data = await response.json();
    setAvailability(data.available ? 'Available' : 'Not Available');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter domain name"
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
      />
      <button onClick={checkDomain}>Check Domain</button>
      {availability && <p>{availability}</p>}
    </div>
  );
};

export default DomainSearch;
