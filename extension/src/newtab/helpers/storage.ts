import { v4 as uuidv4 } from 'uuid';

export type ITool = {
    id: string;
    name: string;
    description?: string;
    url: string;
    tags?: string[];
    icon?: string;
    notes?: string;
    category?: string;
    pinned?: boolean;
    visits: number;
    created?: string;
}


const tools : {[k:string]: ITool}= {
    "id1":{id:"id1", name:"Google", url:"https://google.com", visits: 0, category:"search", description:"Search the web",icon:"https://www.google.com/favicon.ico"},
    "id2":{id:"id2", name:"Youtube", url:"https://youtube.com", visits: 0, category:"video", description:"Watch videos",icon:"https://www.youtube.com/favicon.ico"},
    "id3":{id:"id3", name:"Facebook", url:"https://facebook.com", visits: 0, category:"social", description:"Connect with friends and the world around you",icon:"https://www.facebook.com/favicon.ico"},
    "id4":{id:"id4", name:"Twitter", url:"https://twitter.com", visits: 0, category:"social", description:"See what’s happening in the world right now",icon:"https://www.twitter.com/favicon.ico"},
    "id5":{id:"id5", name:"Instagram", url:"https://instagram.com", visits: 0, category:"social", description:"Capture and share the world's moments",icon:"https://www.instagram.com/favicon.ico"},
    "id6":{id:"id6", name:"Reddit", url:"https://reddit.com", visits: 0, category:"social", description:"The front page of the internet",icon:"https://www.reddit.com/favicon.ico"},
    "id7":{id:"id7", name:"Amazon", url:"https://amazon.com", visits: 0, category:"shopping", description:"Earth's biggest selection",icon:"https://www.amazon.com/favicon.ico"},
    "id8":{id:"id8", name:"Wikipedia", url:"https://wikipedia.org", visits: 0, category:"reference", description:"The free encyclopedia",icon:"https://www.wikipedia.org/favicon.ico"},
    "id9":{id:"id9", name:"Netflix", url:"https://netflix.com", visits: 0, category:"video", description:"Watch TV shows and movies online",icon:"https://www.netflix.com/favicon.ico"},
    "id10":{id:"id10", name:"Twitch", url:"https://twitch.tv", visits: 0, category:"video", description:"Watch livestream gaming videos",icon:"https://www.twitch.tv/favicon.ico"},
    "id11":{id:"id11", name:"Spotify", url:"https://spotify.com", visits: 0, category:"audio", description:"Listen to music and podcasts",icon:"https://www.spotify.com/favicon.ico"},
    "id12":{id:"id12", name:"Github", url:"https://github.com", visits: 0, category:"development", description:"Where the world builds software",icon:"https://www.github.com/favicon.ico"},
    "id13":{id:"id13", name:"Stack Overflow", url:"https://stackoverflow.com", visits: 0, category:"development", description:"Where Developers Learn, Share, & Build Careers",icon:"https://www.stackoverflow.com/favicon.ico"},
    "id14":{id:"id14", name:"Medium", url:"https://medium.com", visits: 0, category:"news", description:"Where good ideas find you",icon:"https://www.medium.com/favicon.ico"},
    "id15":{id:"id15", name:"Gmail", url:"https://gmail.com", visits: 0, category:"email", description:"Email by Google",icon:"https://www.gmail.com/favicon.ico"},
    "id16":{id:"id16", name:"Yahoo", url:"https://yahoo.com", visits: 0, category:"search", description:"News, email and search are just the beginning",icon:"https://www.yahoo.com/favicon.ico"},
    "id17":{id:"id17", name:"Bing", url:"https://bing.com", visits: 0, category:"search", description:"Microsoft Bing",icon:"https://www.bing.com/favicon.ico"},
    "id18":{id:"id18", name:"DuckDuckGo", url:"https://duckduckgo.com", visits: 0, category:"search", description:"The search engine that doesn't track you",icon:"https://www.duckduckgo.com/favicon.ico"},
    "id19":{id:"id19", name:"Baidu", url:"https://baidu.com", visits: 0, category:"search", description:"The leading Chinese language search engine",icon:"https://www.baidu.com/favicon.ico"},
    "id20":{id:"id20", name:"Quora", url:"https://quora.com", visits: 0, category:"social", description:"A place to share knowledge and better understand the world",icon:"https://www.quora.com/favicon.ico"},
    "id21":{id:"id21", name:"LinkedIn", url:"https://linkedin.com", visits: 0, category:"social", description:"The world's largest professional network",icon:"https://www.linkedin.com/favicon.ico"},
    "id22":{id:"id22", name:"Pinterest", url:"https://pinterest.com", visits: 0, category:"social", description:"Discover recipes, home ideas, style inspiration and other ideas to try",icon:"https://www.pinterest.com/favicon.ico"},
    "id23":{id:"id23", name:"Yahoo Mail", url:"https://mail.yahoo.com", visits: 0, category:"email", description:"Yahoo Mail",icon:"https://www.yahoo.com/favicon.ico"},
    "id24":{id:"id24", name:"Outlook", url:"https://outlook.com", visits: 0, category:"email", description:"Microsoft Outlook",icon:"https://www.outlook.com/favicon.ico"},
    "id25":{id:"id25", name:"ProtonMail", url:"https://protonmail.com", visits: 0, category:"email", description:"Secure email: ProtonMail is free encrypted email",icon:"https://www.protonmail.com/favicon.ico"},
    "id26":{id:"id26", name:"Apple", url:"https://apple.com", visits: 0, category:"shopping", description:"Apple",icon:"https://www.apple.com/favicon.ico"},
    "id27":{id:"id27", name:"Walmart", url:"https://walmart.com", visits: 0, category:"shopping", description:"Save Money. Live Better.",icon:"https://www.walmart.com/favicon.ico"},
    "id28":{id:"id28", name:"Ebay", url:"https://ebay.com", visits: 0, category:"shopping", description:"Buy, sell, and save with eBay",icon:"https://www.ebay.com/favicon.ico"},
    "id29":{id:"id29", name:"Target", url:"https://target.com", visits: 0, category:"shopping", description:"Expect More. Pay Less.",icon:"https://www.target.com/favicon.ico"},
    "id30":{id:"id30", name:"Home Depot", url:"https://homedepot.com", visits: 0, category:"shopping", description:"Home Improvement, Home Renovation, Tools, & Hardware",icon:"https://www.homedepot.com/favicon.ico"},
    "id31":{id:"id31", name:"Best Buy", url:"https://bestbuy.com", visits: 0, category:"shopping", description:"Best Buy Official Online Store",icon:"https://www.bestbuy.com/favicon.ico"},
    "id32":{id:"id32", name:"Costco", url:"https://costco.com", visits: 0, category:"shopping", description:"Wholesale Prices",icon:"https://www.costco.com/favicon.ico"},
    "id33":{id:"id33", name:"Newegg", url:"https://newegg.com", visits: 0, category:"shopping", description:"Computer Parts, PC Components, Laptop Computers, LED LCD TV, Digital Cameras and more",icon:"https://www.newegg.com/favicon.ico"},
    "id34":{id:"id34", name:"Wayfair", url:"https://wayfair.com", visits: 0, category:"shopping", description:"Online Home Store for Furniture, Decor, Outdoors & More",icon:"https://www.wayfair.com/favicon.ico"},
    "id35":{id:"id35", name:"Zillow", url:"https://zillow.com", visits: 0, category:"shopping", description:"Real Estate, Apartments, Mortgages & Home Values",icon:"https://www.zillow.com/favicon.ico"},
    "id36":{id:"id36", name:"Trulia", url:"https://trulia.com", visits: 0, category:"shopping", description:"Real Estate Listings, Homes For Sale, Housing Data",icon:"https://www.trulia.com/favicon.ico"},
    "id37":{id:"id37", name:"Redfin", url:"https://redfin.com", visits: 0, category:"shopping", description:"Real Estate, Homes for Sale, MLS Listings, Agents",icon:"https://www.redfin.com/favicon.ico"},
    "id38":{id:"id38", name:"Etsy", url:"https://etsy.com", visits: 0, category:"shopping", description:"Shop for handmade, vintage, custom, and unique gifts for everyone",icon:"https://www.etsy.com/favicon.ico"},
    "id39":{id:"id39", name:"Craigslist", url:"https://craigslist.org", visits: 0, category:"shopping", description:"craigslist: seattle-tacoma jobs, apartments, for sale, services, community, and events",icon:"https://www.craigslist.org/favicon.ico"},
    "id40":{id:"id40", name:"Booking", url:"https://booking.com", visits: 0, category:"travel", description:"Official site",icon:"https://www.booking.com/favicon.ico"},
    "id41":{id:"id41", name:"Expedia", url:"https://expedia.com", visits: 0, category:"travel", description:"Travel: Vacations, Cheap Flights, Airline Tickets & Airfares",icon:"https://www.expedia.com/favicon.ico"},
    "id42":{id:"id42", name:"Tripadvisor", url:"https://tripadvisor.com", visits: 0, category:"travel", description:"Tripadvisor: Read Reviews, Compare Prices & Book",icon:"https://www.tripadvisor.com/favicon.ico"}
}

export const getTools = () => {
    // return an object with list of tools argrregated by category from the tools object
    const resp = {}

    for (const tool in tools) {
        const category = tools[tool].category
        if (category in resp) {
            resp[category].push(tools[tool])
        } else {
            resp[category] = [tools[tool]]
        }
    }
    return resp
}


export const getTool = (id: string) => {
    return tools[id]
}

export const addTool = (tool: ITool) => {
    tool.created = new Date().toISOString()
    tool.id = uuidv4();
    tools[tool.id] = tool
}

export const updateTool = (tool: ITool) => {
    tools[tool.id] = tool
}