const destinations = [
 {name:"Mumbai",img:"https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=700&q=80"},
 {name:"Delhi",img:"https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=700&q=80"},
 {name:"Goa",img:"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=700&q=80"},
 {name:"Jaipur",img:"https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=700&q=80"},
 {name:"Udaipur",img:"https://images.unsplash.com/photo-1602643163983-ed0babc39797?auto=format&fit=crop&w=700&q=80"},
 {name:"Kerala",img:"https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=700&q=80"}
];
const mumbaiPlaces = [
 {time:"10:00 AM",icon:"📍",name:"Chhatrapati Shivaji Maharaj Terminus",dur:"45 min",cost:"₹40",travel:"Start",distance:"—",img:"https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=900&q=80",desc:"Explore the UNESCO-listed Victorian Gothic landmark and its remarkable architecture."},
 {time:"11:00 AM",icon:"🏛️",name:"Fort Heritage Walk",dur:"1h 15m",cost:"₹150",travel:"15 min",distance:"1.2 km",img:"https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=900&q=80",desc:"A relaxed walk through historic lanes, old façades and hidden architectural details."},
 {time:"12:30 PM",icon:"🍛",name:"Local Food Experience",dur:"1h",cost:"₹280",travel:"10 min",distance:"1.5 km",img:"https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80",desc:"Taste classic Mumbai street food with a curated local-food stop."},
 {time:"2:00 PM",icon:"🌊",name:"Gateway of India",dur:"1h",cost:"₹0",travel:"25 min",distance:"3.4 km",img:"https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=900&q=80",desc:"Take in the waterfront, harbour views and historic Apollo Bunder area."},
 {time:"3:30 PM",icon:"🎨",name:"Kala Ghoda Culture Trail",dur:"1h",cost:"₹200",travel:"12 min",distance:"1.1 km",img:"https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=900&q=80",desc:"Discover galleries, public art and a quieter side of South Mumbai."},
 {time:"5:00 PM",icon:"☕",name:"Heritage Café",dur:"45 min",cost:"₹250",travel:"8 min",distance:"0.8 km",img:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",desc:"Slow down with a café break before heading back to your endpoint."}
];
const gems = [
 {name:"Kala Ghoda Artisan Walk",loc:"Fort, Mumbai",cat:"Culture",cost:"₹150",time:"1.5 hours",img:"https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=800&q=80",why:"You enjoy local culture and have 2 hours free nearby."},
 {name:"Khotachiwadi Heritage Lanes",loc:"Girgaon, Mumbai",cat:"History",cost:"₹0",time:"1 hour",img:"https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&w=800&q=80",why:"A calm heritage detour that fits a photography-friendly route."},
 {name:"Bandra Village Food Trail",loc:"Bandra, Mumbai",cat:"Food",cost:"₹350",time:"2 hours",img:"https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",why:"Matches your food preference while avoiding a crowded tourist circuit."},
 {name:"Sassoon Dock Morning Market",loc:"Colaba, Mumbai",cat:"Shopping",cost:"₹100",time:"1 hour",img:"https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=800&q=80",why:"A vibrant local market option when you want something authentic."},
 {name:"Banganga Culture Stop",loc:"Walkeshwar, Mumbai",cat:"History",cost:"₹0",time:"45 min",img:"https://images.unsplash.com/photo-1590050752117-238cb0fb9b90?auto=format&fit=crop&w=800&q=80",why:"A quieter historic experience with low cost and short travel time."},
 {name:"Aarey Nature Escape",loc:"Goregaon, Mumbai",cat:"Nature",cost:"₹100",time:"1.5 hours",img:"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80",why:"Ideal for a nature reset if your route has extra time."}
];

let state = {
 step:1,destination:"Mumbai",time:"8 Hours",budget:2000,interests:["History","Food"],food:"Local Food",transport:"Public Transport",start:"Vashi",end:"CSMT"
};
let savedTrips = [
 {id:1,name:"Mumbai Explorer",time:"8 Hours",budget:"₹2,000",tags:"History + Food",emoji:"🌆"},
 {id:2,name:"Jaipur Heritage Trail",time:"2 Days",budget:"₹7,000",tags:"History + Culture",emoji:"🏰"},
 {id:3,name:"Goa Weekend",time:"3 Days",budget:"₹10,000",tags:"Beach + Food",emoji:"🌴"}
];

function page(id){
 document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
 document.getElementById(id).classList.add("active");
 document.querySelectorAll("nav a").forEach(a=>a.classList.toggle("active",a.dataset.page===id));
 window.scrollTo({top:0,behavior:"smooth"});
 document.getElementById("main-nav").classList.remove("open");
 if(id==="home") renderHome(); if(id==="planner") renderPlanner(); if(id==="itinerary") renderItinerary();
 if(id==="assistant") renderAssistant(); if(id==="explore") renderExplore(); if(id==="trips") renderTrips(); if(id==="profile") renderProfile();
}
document.addEventListener("click",e=>{
 const a=e.target.closest("[data-page]"); if(a){e.preventDefault();page(a.dataset.page)}
});
document.getElementById("mobile-toggle").onclick=()=>document.getElementById("main-nav").classList.toggle("open");

function showToast(msg,success=false){
 const t=document.createElement("div");t.className="toast"+(success?" success":"");t.textContent=msg;
 document.getElementById("toast-container").appendChild(t);setTimeout(()=>t.remove(),2800);
}
function openModal(html){document.getElementById("modal-content").innerHTML=html;document.getElementById("modal").classList.add("open")}
function closeModal(){document.getElementById("modal").classList.remove("open")}
document.getElementById("modal").addEventListener("click",e=>{if(e.target.id==="modal")closeModal()});

function renderHome(){
 document.getElementById("home").innerHTML=`
 <div class="hero"><div class="container hero-inner">
  <div><span class="eyebrow">✦ AI-POWERED TRAVEL PLANNER</span><h1>Your Journey.<br><span style="color:#78b1ff">Intelligently Planned.</span></h1>
  <p>AI-powered travel planning that fits your time, budget and interests — and adapts when your plans change.</p>
  <div class="hero-buttons"><button class="btn btn-primary" data-page="planner">Plan My Trip ✨</button><button class="btn btn-secondary" data-page="explore">Explore Destinations</button></div></div>
  <div class="hero-visual"><div class="hero-photo"></div><div class="floating-card"><div class="top"><div><b>Mumbai Explorer</b><div style="font-size:12px;color:#667085;margin-top:4px">8 Hours • ₹2,000</div></div><span class="badge">AI Optimized</span></div><div class="check-row"><span>✓ 4 Experiences</span><span>✓ Public Transport</span><span>✓ Food Included</span></div></div></div>
 </div></div>
 <div class="features"><div class="container"><div class="section-head"><div><h2>Travel planning, reimagined.</h2><p>Four decisions your AI travel companion handles for you.</p></div></div>
 <div class="feature-grid">${[
 ["💰","Budget Smart","Plans within your budget"],
 ["⏰","Time Optimized","Makes the most of your available time"],
 ["❤️","Personalized","Built around your interests"],
 ["🔄","Adaptive","Replans when conditions change"]
 ].map(x=>`<div class="feature-card"><div class="feature-icon">${x[0]}</div><h3>${x[1]}</h3><p>${x[2]}</p></div>`).join("")}</div></div></div>`;
}
function renderPlanner(){
 const steps=[
 ()=>`<h2>Where do you want to go?</h2><p class="hint">Pick a destination and let TripWise handle the details.</p><div class="searchbox"><input id="dest-search" placeholder="Search destination..." value=""></div><div class="dest-grid" id="dest-grid">${destinations.map(d=>`<div class="destination-card ${state.destination===d.name?"selected":""}" data-dest="${d.name}"><img src="${d.img}"><div>${d.name}</div></div>`).join("")}</div>`,
 ()=>`<h2>How much time do you have?</h2><p class="hint">We’ll optimize experiences, travel time and buffer.</p><div class="option-grid">${["4 Hours","8 Hours","1 Day","2 Days","3+ Days"].map(x=>`<button class="option ${state.time===x?"selected":""}" data-time="${x}">⏱️<strong>${x}</strong></button>`).join("")}</div><div style="margin-top:18px"><label class="label">Custom time (optional)</label><input class="text-input" id="custom-time" placeholder="e.g. 6 hours"></div>`,
 ()=>`<h2>What is your budget?</h2><p class="hint">Your itinerary will never knowingly exceed the amount you set.</p><div class="range-wrap"><div class="budget-value">₹<span id="budget-val">${state.budget.toLocaleString()}</span></div><input id="budget-range" class="range" type="range" min="500" max="10000" step="500" value="${state.budget}"><div style="display:flex;justify-content:space-between;color:#8791a5;font-size:11px;margin-top:8px"><span>₹500</span><span>₹10,000+</span></div></div>`,
 ()=>`<h2>What do you love?</h2><p class="hint">Select as many as you want.</p><div class="chips">${["🏛️ History","🍛 Food","🌊 Nature","🎨 Art & Culture","🛍️ Shopping","📸 Photography","🏕️ Adventure","☕ Cafés","🌃 Nightlife","🧘 Wellness"].map(x=>{let n=x.slice(2);return `<button class="chip ${state.interests.includes(n)?"selected":""}" data-interest="${n}">${x}</button>`}).join("")}</div>`,
 ()=>`<h2>What would you like to eat?</h2><p class="hint">We’ll prioritize suitable food stops on your route.</p><div class="option-grid">${["🍛 Local Food","🥗 Vegetarian","🌱 Vegan","🍔 Street Food","🍽️ Fine Dining","☕ Cafés"].map(x=>{let n=x.slice(2);return `<button class="option ${state.food===n?"selected":""}" data-food="${n}">${x}<strong>${n}</strong></button>`}).join("")}</div>`,
 ()=>`<h2>How do you want to travel?</h2><p class="hint">Choose your preferred way to move around.</p><div class="option-grid">${["🚆 Public Transport","🚶 Walking","🚕 Cab","🏍️ Bike","🚗 Car","🔀 Best Available"].map(x=>{let n=x.slice(2);return `<button class="option ${state.transport===n?"selected":""}" data-transport="${n}">${x}<strong>${n}</strong></button>`}).join("")}</div>`,
 ()=>`<h2>Where are you starting and finishing?</h2><p class="hint">This helps us optimize the first and last leg.</p><div class="location-grid"><div><label class="label">Starting location</label><input class="text-input" id="start-input" value="${state.start}" placeholder="Where are you starting?"></div><div><label class="label">Ending location</label><input class="text-input" id="end-input" value="${state.end}" placeholder="Where do you want to finish?"></div></div><div class="change-banner" style="margin-top:20px">💡 Demo-ready route: Vashi → CSMT. You can change both locations.</div>`
 ];
 document.getElementById("planner").innerHTML=`<div class="container planner-wrap"><div class="page-title"><h1>Plan Your Trip</h1><p>Tell us what matters. TripWise AI will handle the optimization.</p></div><div class="stepper">${[1,2,3,4,5,6,7].map(i=>`<div class="step-dot ${i<=state.step?"done":""}"></div>`).join("")}</div><div class="form-card"><div class="step-content">${steps[state.step-1]()}</div><div class="form-nav">${state.step>1?`<button class="btn btn-ghost" id="prev-step">← Back</button>`:"<span></span>"}${state.step<7?`<button class="btn btn-primary" id="next-step">Continue →</button>`:`<button class="btn btn-primary" id="generate-trip">✨ Generate My AI Trip</button>`}</div></div></div>`;
 attachPlanner();
}
function attachPlanner(){
 document.querySelectorAll("[data-dest]").forEach(x=>x.onclick=()=>{state.destination=x.dataset.dest;renderPlanner()});
 document.querySelectorAll("[data-time]").forEach(x=>x.onclick=()=>{state.time=x.dataset.time;renderPlanner()});
 document.querySelectorAll("[data-interest]").forEach(x=>x.onclick=()=>{let n=x.dataset.interest;state.interests=state.interests.includes(n)?state.interests.filter(v=>v!==n):[...state.interests,n];renderPlanner()});
 document.querySelectorAll("[data-food]").forEach(x=>x.onclick=()=>{state.food=x.dataset.food;renderPlanner()});
 document.querySelectorAll("[data-transport]").forEach(x=>x.onclick=()=>{state.transport=x.dataset.transport;renderPlanner()});
 const s=document.getElementById("budget-range");if(s)s.oninput=()=>{state.budget=+s.value;document.getElementById("budget-val").textContent=state.budget.toLocaleString()};
 const search=document.getElementById("dest-search");if(search)search.oninput=()=>{let q=search.value.toLowerCase();document.querySelectorAll(".destination-card").forEach(c=>c.style.display=c.dataset.dest.toLowerCase().includes(q)?"block":"none")};
 const next=document.getElementById("next-step");if(next)next.onclick=()=>{if(state.step===7){return}state.step++;renderPlanner()};
 const prev=document.getElementById("prev-step");if(prev)prev.onclick=()=>{state.step--;renderPlanner()};
 const gen=document.getElementById("generate-trip");if(gen)gen.onclick=generateTrip;
}
async function generateTrip(){
 const start=document.getElementById("start-input"),end=document.getElementById("end-input");if(start)state.start=start.value||"Vashi";if(end)state.end=end.value||"CSMT";
 const messages=["Understanding your preferences...","Finding suitable experiences...","Optimizing routes...","Checking time & budget...","Creating your itinerary..."];
 let i=0;openModal(`<button class="modal-close" onclick="closeModal()">×</button><h2>✨ TripWise AI is planning</h2><p id="ai-msg">${messages[0]}</p><div class="progress"><i id="ai-progress" style="width:8%"></i></div>`);
 const timer=setInterval(()=>{i++;if(i<messages.length){document.getElementById("ai-msg").textContent=messages[i];document.getElementById("ai-progress").style.width=((i+1)/messages.length*100)+"%"}else{clearInterval(timer);closeModal();state.step=1;page("itinerary");showToast("AI itinerary generated successfully!",true)}},650);
}
function renderItinerary(){
 const total=state.destination==="Mumbai"?"7h 35m":"7h 10m",cost=state.budget>=2000?"₹1,720":"₹1,480";
 document.getElementById("itinerary").innerHTML=`<div class="container itinerary-page"><div class="page-title"><h1>Your ${state.destination} Experience</h1><p>${state.time} • ₹${state.budget.toLocaleString()} budget • ${state.interests.join(" + ")} • ${state.transport}</p></div>
 <div class="summary-grid">${[["Total Time",total],["Estimated Cost",cost],["Experiences","5"],["Distance","18.4 km"]].map(x=>`<div class="card metric"><small>${x[0]}</small><strong>${x[1]}</strong></div>`).join("")}</div>
 <div class="card" style="padding:15px 20px;margin-bottom:22px"><div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:8px"><b>Budget remaining</b><b style="color:var(--green)">₹280</b></div><div class="progress"><i></i></div></div>
 <div class="itinerary-layout"><div class="card timeline"><div class="section-head"><div><h2 style="font-family:Poppins;margin:0">Your optimized route</h2><p>Balanced for time, cost, interests and travel distance.</p></div></div>${mumbaiPlaces.map((p,i)=>`${i?`<div class="transport">🚆 ${p.travel==="Start"?"":p.travel+" • "+p.distance} ${p.travel!=="Start"?"• ₹30":""}</div>`:""}<div class="timeline-item"><div class="time">${p.time}</div><div class="dot">${p.icon}</div><div class="place-card"><img src="${p.img}"><div class="place-info"><h3>${p.name}</h3><p>${p.desc}</p><div class="meta"><span>⏱ ${p.dur}</span><span>💰 ${p.cost}</span><span>📏 ${p.distance}</span><button class="btn btn-light" style="margin-left:auto;padding:6px 9px;font-size:10px" onclick='showPlace(${JSON.stringify(p)})'>View Details</button></div></div></div></div>`).join("")}</div>
 <div class="card map-card"><h3 style="margin:5px 5px 13px">🗺️ Route overview</h3><div class="fake-map"><div class="route-line"></div><div class="pin one"><span>1</span></div><div class="pin two"><span>4</span></div><div class="pin three"><span>6</span></div><div class="map-label a">CSMT</div><div class="map-label b">Gateway</div><div class="map-label c">Return</div></div><div style="display:flex;justify-content:space-between;font-size:12px;color:#667085;padding:13px 4px 2px"><span>🚆 Public transport prioritized</span><b style="color:var(--green)">₹1,720</b></div></div></div>
 <div class="ai-section"><div class="section-head"><div><h2>Why AI chose this itinerary</h2><p>Every stop is a decision, not a random recommendation.</p></div></div><div class="ai-grid">${[
 ["❤️","Matches your interests","4 of 5 experiences match your History + Food preferences."],
 ["💰","Within budget","Estimated spend is ₹1,720 of ₹2,000."],
 ["⏰","Time optimized","Includes 25 minutes of buffer time."],
 ["🚌","Transport optimized","Public transport was prioritized to reduce cost."]
 ].map(x=>`<div class="card ai-card"><div class="big">${x[0]}</div><h4>${x[1]}</h4><p>${x[2]}</p></div>`).join("")}</div></div></div>`;
}
function showPlace(p){openModal(`<button class="modal-close" onclick="closeModal()">×</button><img class="detail-img" src="${p.img}"><h2>${p.name}</h2><p style="color:#667085">${p.desc}</p><div class="meta"><span>⏱ ${p.dur}</span><span>💰 ${p.cost}</span><span>📏 ${p.distance}</span></div><button class="btn btn-primary" style="width:100%;margin-top:18px" onclick="closeModal();showToast('Added to your trip')">Add to Trip</button>`)}

function renderAssistant(){
 document.getElementById("assistant").innerHTML=`<div class="assistant-hero"><div class="container"><span class="eyebrow">🔄 ADAPTIVE TRAVEL ENGINE</span><h1 style="margin-top:16px">Something changed?</h1><p>Your AI travel assistant can adapt the rest of your journey — without rebuilding everything.</p><div class="state-grid"><div class="state-card"><small>📍 Current Location</small><strong>Colaba</strong></div><div class="state-card"><small>⏰ Time Remaining</small><strong>4h 20m</strong></div><div class="state-card"><small>💰 Budget Remaining</small><strong>₹950</strong></div></div><button class="btn btn-primary" onclick="manualReplan()">🔄 Replan My Trip</button></div></div>
 <div class="container assistant-body"><div class="section-head"><div><h2>Tell TripWise what changed</h2><p>Try the exact demo scenario below.</p></div></div><div class="event-grid">${[["🌧️","Heavy Rain","rain"],["⏰","I'm Running Late","late"],["🚧","Route Disrupted","route"],["❌","Attraction Unavailable","closed"]].map(x=>`<button class="event-btn" onclick="replan('${x[2]}')">${x[0]}<br><small style="color:#667085">${x[1]}</small></button>`).join("")}</div>
 <div class="card replan-box"><div class="replan-status" id="replan-status"></div></div></div>`;
}
function manualReplan(){replan("rain")}
function replan(type){
 const box=document.getElementById("replan-status");box.classList.add("show");box.innerHTML=`<div style="font-size:20px">⚠️ <b>${type==="rain"?"Weather change":type==="late"?"Delay":"Trip change"} detected</b></div><p style="color:#667085">Analyzing your remaining itinerary...</p><div class="progress"><i style="width:35%"></i></div>`;
 setTimeout(()=>{box.innerHTML=`<div style="font-size:20px">🤖 Finding ${type==="rain"?"weather-friendly":"best available"} alternatives...</div><p style="color:#667085">Completed activities are locked. Only the remaining journey is being optimized.</p><div class="progress"><i style="width:72%"></i></div>`},800);
 setTimeout(()=>{box.innerHTML=`<div style="font-size:22px">🔄 Your itinerary has been updated</div><div class="compare"><div class="compare-card"><h3>OLD PLAN</h3><div class="mini-route">2:00 PM · 🌊 Gateway of India <small>Outdoor</small></div><div class="mini-route">3:30 PM · 🎨 Culture Trail</div><div class="mini-route">5:00 PM · ☕ Café</div><b>₹900 remaining · 4h 20m</b></div><div class="compare-card new"><h3>NEW PLAN ✨</h3><div class="mini-route">2:00 PM · 🏛️ Indoor Museum <small>Weather-friendly</small></div><div class="mini-route">3:30 PM · 🍛 Local Food Experience</div><div class="mini-route">4:30 PM · ☕ Heritage Café</div><div class="mini-route">5:30 PM · 🚆 Return</div><b>₹870 remaining · 4h 05m</b></div></div><div class="change-banner">✓ Your completed activities were preserved. Only the remaining journey was optimized.</div>`;showToast("Journey successfully replanned!",true)},1600);
}

function renderExplore(){
 document.getElementById("explore").innerHTML=`<div class="container explore"><div class="page-title"><h1>Discover Beyond the Tourist Map</h1><p>AI-curated local experiences you might otherwise miss.</p></div><div class="filters">${["All","Food","Culture","History","Nature","Shopping","Experiences"].map(x=>`<button class="chip ${x==="All"?"selected":""}" data-filter="${x}">${x}</button>`).join("")}</div><div class="gem-grid" id="gem-grid">${gems.map(gemCard).join("")}</div></div>`;
 document.querySelectorAll("[data-filter]").forEach(b=>b.onclick=()=>{document.querySelectorAll("[data-filter]").forEach(x=>x.classList.remove("selected"));b.classList.add("selected");let f=b.dataset.filter;document.getElementById("gem-grid").innerHTML=gems.filter(g=>f==="All"||g.cat===f).map(gemCard).join("")});
}
function gemCard(g){return `<div class="card gem-card"><img src="${g.img}"><div class="gem-body"><span class="tag">${g.cat}</span><h3>${g.name}</h3><p>📍 ${g.loc} &nbsp; • &nbsp; 💰 ${g.cost} &nbsp; • &nbsp; ⏱ ${g.time}</p><div class="why">✨ <b>Why AI recommends it:</b> ${g.why}</div><button class="btn btn-light" style="width:100%;margin-top:14px" onclick="showToast('${g.name} saved to your discoveries!',true)">♡ Save Experience</button></div></div>`}

function renderTrips(){
 document.getElementById("trips").innerHTML=`<div class="container"><div class="page-title"><h1>My Trips</h1><p>Your saved journeys, ready when you are.</p></div><div class="trip-grid">${savedTrips.map(t=>`<div class="card trip-card"><div class="trip-top"><div class="trip-icon">${t.emoji}</div><span class="badge">Saved</span></div><h3>${t.name}</h3><p>${t.time} &nbsp; • &nbsp; ${t.budget}<br>${t.tags}</p><div class="trip-actions"><button class="btn btn-primary" onclick="page('itinerary')">View Trip</button><button class="btn btn-ghost" onclick="showToast('Trip editor opened')">Edit</button><button class="btn btn-danger" onclick="deleteTrip(${t.id})">Delete</button></div></div>`).join("")}</div></div>`;
}
function deleteTrip(id){savedTrips=savedTrips.filter(t=>t.id!==id);renderTrips();showToast("Trip deleted")}
function renderProfile(){
 document.getElementById("profile").innerHTML=`<div class="container"><div class="page-title"><h1>Profile & Preferences</h1><p>Teach TripWise how you like to travel.</p></div><div class="profile-layout"><div class="card profile-card"><div class="avatar">SD</div><h2 style="margin:0">Shirshti’s Travel Profile</h2><p style="color:#667085;font-size:13px">Personalized planning preferences</p><div class="pref-row"><h4>Typical Budget</h4><p>₹2,000 per day</p></div><div class="pref-row"><h4>Preferred Transport</h4><p>Public Transport</p></div><div class="pref-row"><h4>Food</h4><p>Local Food</p></div></div><div class="card profile-card"><h2 style="font-family:Poppins;margin-top:0">Travel Preferences</h2><div class="pref-row"><h4>Favorite Activities</h4><div class="chips" style="margin-top:10px">${["History","Food","Art & Culture","Photography"].map(x=>`<span class="chip selected">${x}</span>`).join("")}</div></div><div class="pref-row"><h4>Preferred Transport</h4><select class="text-input"><option>Public Transport</option><option>Best Available</option><option>Walking</option><option>Cab</option></select></div><div class="pref-row"><h4>Travel Style</h4><div class="style-grid">${["Budget Explorer","Balanced Traveler","Comfort Traveler","Experience Seeker"].map((x,i)=>`<button class="style-card ${i===1?"selected":""}" onclick="selectStyle(this)">${x}</button>`).join("")}</div></div><button class="btn btn-primary" style="margin-top:18px" onclick="showToast('Preferences saved successfully!',true)">Save Preferences</button></div></div></div>`;
}
function selectStyle(el){document.querySelectorAll(".style-card").forEach(x=>x.classList.remove("selected"));el.classList.add("selected")}

renderHome();
