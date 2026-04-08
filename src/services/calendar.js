/**
 * Google Calendar Service for Elsa England PTA
 * 
 * To use this live:
 * 1. Go to Google Cloud Console (https://console.cloud.google.com/)
 * 2. Create a project and enable "Google Calendar API"
 * 3. Create an "API Key" under Credentials
 * 4. Ensure the PTA calendar is set to "Public" in its settings
 */

const API_KEY = ''; // DROP YOUR API KEY HERE
const PTA_CALENDAR_ID = 'englandptawebmaster@gmail.com';

export const fetchUpcomingEvents = async (maxResults = 3) => {
  const now = new Date();
  const todayISO = now.toISOString().split('T')[0];

  // Curated list of all events
  const allEvents = [
    {
      title: 'Meet Your Neighbor Night',
      date: 'Feb 6, 2026',
      isoDate: '2026-02-06',
      description: 'Community welcome event at the start of the semester to meet fellow England families.',
    },
    {
      title: 'Spring Picnic',
      date: 'Mar 29, 2026',
      isoDate: '2026-03-29',
      description: 'Outdoor celebration for the whole family with food, games, and community fun.',
    },
    {
      title: 'PTA Meeting',
      date: 'Apr 9, 2026',
      isoDate: '2026-04-09',
      description: 'Join us for our April PTA meeting. Stay informed about school initiatives and upcoming events.',
    },
    {
      title: 'Movie Night',
      date: 'Apr 24, 2026',
      isoDate: '2026-04-24',
      description: 'Join us for a fun family movie night under the stars on the school playground!',
    },
    {
      title: 'Spirit Night (Baskin Robbins & Happy Slice)',
      date: 'Aug 26, 2026',
      isoDate: '2026-08-26',
      description: 'Support Elsa England PTA by visiting Baskin Robbins and Happy Slice. A portion of sales goes back to our school!',
    },
    {
      title: 'Spooky Fun Run',
      date: 'Oct 2026',
      isoDate: '2026-10-01', // Using first of month for sorting, display says "Oct 2026"
      description: 'Halloween-themed school run fundraiser. Students run laps while dressed in costumes!',
    }
  ];

  // If no API Key, filter the local list by date
  if (!API_KEY) {
    return allEvents
      .filter(event => event.isoDate >= todayISO)
      .sort((a, b) => a.isoDate.localeCompare(b.isoDate))
      .slice(0, maxResults);
  }

  try {
    const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(PTA_CALENDAR_ID)}/events?key=${API_KEY}&timeMin=${now.toISOString()}&singleEvents=true&orderBy=startTime&maxResults=${maxResults}`;
    
    const response = await fetch(url);
    const data = await response.json();

    if (!data.items) return [];

    return data.items.map(event => {
      const start = event.start.dateTime || event.start.date;
      const eventDate = new Date(start);
      
      return {
        title: event.summary,
        date: eventDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        isoDate: start.split('T')[0],
        description: event.description || 'Join us for this upcoming PTA event!',
        link: event.htmlLink
      };
    });
  } catch (error) {
    console.error('Error fetching calendar events:', error);
    // Fallback to local filtered list on error
    return allEvents
      .filter(event => event.isoDate >= todayISO)
      .sort((a, b) => a.isoDate.localeCompare(b.isoDate))
      .slice(0, maxResults);
  }
};
