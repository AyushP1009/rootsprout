"use client";
import { useEffect, useState } from "react";

export default function FindFoodPage() {
  const [resources, setResources] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  // This is where the magic happens! We fetch the live data from your database API
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        let url = "/api/food-resources";
        
        // Add filters to the API call so your backend does the heavy lifting
        const params = new URLSearchParams();
        if (activeFilter !== "ALL" && activeFilter !== "KIDS") params.append("type", activeFilter);
        if (activeFilter === "KIDS") params.append("kids", "true");
        if (searchQuery) params.append("q", searchQuery);
        
        if (params.toString()) {
          url += `?${params.toString()}`;
        }

        const response = await fetch(url);
        const json = await response.json();
        
        if (json.success) {
          setResources(json.data);
        }
      } catch (error) {
        console.error("Failed to fetch resources", error);
      }
      setLoading(false);
    }
    fetchData();
  }, [activeFilter, searchQuery]); // Re-fetch whenever the filter or search changes!

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <div className="animate-in">
      <div className="locator-hero">
        <div className="locator-hero-inner">
          <h1>🗺 Find Food Near You</h1>
          <p>Every resource below is free to use. No one should go hungry. Find the nearest food bank, pantry, or mobile distribution in Charlotte, NC.</p>
          <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input 
              type="text" 
              placeholder="Search by name, neighborhood, or zip…" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="filter-row">
        <button className={`filter-chip ${activeFilter === 'ALL' ? 'active' : ''}`} onClick={() => handleFilterClick('ALL')}>All Types</button>
        <button className={`filter-chip ${activeFilter === 'FOOD_BANK' ? 'active' : ''}`} onClick={() => handleFilterClick('FOOD_BANK')}>🏦 Food Banks</button>
        <button className={`filter-chip ${activeFilter === 'PANTRY' ? 'active' : ''}`} onClick={() => handleFilterClick('PANTRY')}>🛒 Pantries</button>
        <button className={`filter-chip ${activeFilter === 'MOBILE_PANTRY' ? 'active' : ''}`} onClick={() => handleFilterClick('MOBILE_PANTRY')}>🚐 Mobile</button>
        <button className={`filter-chip ${activeFilter === 'KIDS' ? 'active' : ''}`} onClick={() => handleFilterClick('KIDS')}>👶 Serves Kids</button>
      </div>

      <div style={{ maxWidth: "1100px", margin: "16px auto 0", padding: "0 24px" }}>
        <p style={{ fontSize: ".875rem", color: "var(--text-soft)" }}>
          {loading ? "Loading resources..." : `Showing ${resources.length} resource${resources.length !== 1 ? 's' : ''} in Charlotte, NC`}
        </p>
      </div>

      <div className="resource-grid">
        {loading ? (
          <p style={{ textAlign: "center", width: "100%", padding: "40px" }}>Loading data from database...</p>
        ) : resources.length === 0 ? (
          <div className="empty-state" style={{ gridColumn: "1/-1" }}>
            <div className="icon">🔍</div>
            <h3>No resources found</h3>
            <p>Try a different search term or remove a filter.</p>
          </div>
        ) : (
          resources.map((r) => (
            <div key={r.id} className="resource-card">
              <div className="resource-card-header">
                <span className={`resource-type-badge badge-${r.resourceType}`}>
                  {r.resourceType.replace("_", " ")}
                </span>
              </div>
              <div className="resource-card-body">
                <div className="resource-name">{r.name}</div>
                <div className="resource-address">
                  <span>📍</span>
                  <span>{r.address}, {r.city}, {r.state} {r.zip}</span>
                </div>
                {r.description && <p className="resource-desc">{r.description}</p>}
                
                <div className="info-pills">
                  {!r.idRequired ? <span className="info-pill">No ID required</span> : <span className="info-pill warn">⚠ ID required</span>}
                  {r.acceptsDonations && <span className="info-pill">Accepts donations</span>}
                </div>
              </div>
              <div className="resource-card-footer">
                {r.phone && <a href={`tel:${r.phone}`} className="rc-link-btn phone">📞 {r.phone}</a>}
                {r.website && <a href={r.website} target="_blank" rel="noopener noreferrer" className="rc-link-btn web">🌐 Website</a>}
                {r.servesChildren && <span className="kids-serves-badge">👶 Serves Families</span>}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}