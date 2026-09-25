import { useState } from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  Truck, 
  AlertCircle,
  Package,
  Store,
  ChevronRight
} from 'lucide-react';
import { siteConfig } from '../siteConfig';
import GetAppDropdown from './GetAppDropdown';

const hubLocations = [
  {
    id: 'central',
    name: 'University Central Library Courtyard',
    zone: 'Main Campus',
    timing: 'Wed & Sat: 1:00 PM – 5:30 PM',
    type: 'Official Central Distribution Hub',
    features: ['Inspection desk on-site', 'MoMo & Cash verification', 'Official Store pick point'],
    status: 'Next drop in 2 days'
  },
  {
    id: 'pentagon',
    name: 'Pentagon Block B Drop Point',
    zone: 'Hostel Zone',
    timing: 'Mon to Sat: 4:00 PM – 7:00 PM',
    type: 'Hostel Resident Hub',
    features: ['Convenient evening pickup', 'Hostel vendor direct handoff', 'Express locker staging'],
    status: 'Active daily'
  },
  {
    id: 'nightmarket',
    name: 'Campus Night Market Pavilion',
    zone: 'South Gate Area',
    timing: 'Daily: 6:00 PM – 10:00 PM',
    type: 'Evening Food & Essentials Hub',
    features: ['Hot meals & fresh bakes', 'High-traffic meetup zone', 'Instant vendor handoff'],
    status: 'Open tonight'
  }
];

export default function CampusHubTracker() {
  const [activeHub, setActiveHub] = useState(hubLocations[0]);

  return (
    <section className="hub-tracker-section">
      <div className="container-main">
        <div className="hub-tracker-container">
          {/* Top Banner */}
          <div className="hub-tracker-header">
            <div>
              <div className="badge-kicker-glow">
                <MapPin size={14} />
                <span>Verified Campus Logistics</span>
              </div>
              <h2>How pickup scheduling works on your campus</h2>
              <p>
                Unlike unpredictable cross-town couriers, DefiMart operates fixed weekly pickup hubs so you know exactly where and when to collect and inspect your purchases.
              </p>
            </div>
            <div className="hub-badge-pill">
              <ShieldCheck size={18} className="text-primary" />
              <span>Inspection Before Payment At Every Hub</span>
            </div>
          </div>

          {/* Grid: Interactive Hub Selector + Interactive Staging Preview */}
          <div className="hub-interactive-grid">
            {/* Left: Hub Location Tabs */}
            <div className="hub-locations-list">
              <span className="hub-list-kicker">Choose a Campus Staging Hub</span>
              {hubLocations.map((hub) => (
                <div
                  key={hub.id}
                  className={`hub-location-card ${activeHub.id === hub.id ? 'is-selected' : ''}`}
                  onClick={() => setActiveHub(hub)}
                >
                  <div className="hub-card-top">
                    <span className="hub-zone-tag">{hub.zone}</span>
                    <span className="hub-status-text">{hub.status}</span>
                  </div>
                  <h3>{hub.name}</h3>
                  <div className="hub-meta-timing">
                    <Clock size={14} className="text-primary" />
                    <span>{hub.timing}</span>
                  </div>
                  <div className="hub-card-select-link">
                    <span>{activeHub.id === hub.id ? 'Currently Selected' : 'View Hub Schedule'}</span>
                    <ChevronRight size={15} />
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Detailed Hub Interactive Staging Terminal */}
            <div className="hub-terminal-display">
              <div className="hub-terminal-screen">
                <div className="terminal-top-status">
                  <div className="terminal-dots">
                    <span />
                    <span />
                    <span />
                  </div>
                  <span className="terminal-title">HUB LOGISTICS MANIFEST · {activeHub.zone.toUpperCase()}</span>
                </div>

                <div className="terminal-content-body">
                  <div className="terminal-hub-title-block">
                    <span className="terminal-type">{activeHub.type}</span>
                    <h4>{activeHub.name}</h4>
                    <div className="terminal-time-row">
                      <Calendar size={16} className="text-primary" />
                      <span>{activeHub.timing}</span>
                    </div>
                  </div>

                  <div className="terminal-step-list">
                    <div className="terminal-step-item">
                      <div className="terminal-step-icon">01</div>
                      <div className="terminal-step-text">
                        <strong>Order Routed to Hub</strong>
                        <p>Merchant packs the item with your unique order identifier and deposits it at the hub.</p>
                      </div>
                    </div>

                    <div className="terminal-step-item">
                      <div className="terminal-step-icon">02</div>
                      <div className="terminal-step-text">
                        <strong>Arrival SMS Notification</strong>
                        <p>You receive an automated SMS alert the moment your package is ready for collection.</p>
                      </div>
                    </div>

                    <div className="terminal-step-item">
                      <div className="terminal-step-icon">03</div>
                      <div className="terminal-step-text">
                        <strong>Open & Inspect On-Site</strong>
                        <p>Unbox and test your item at the hub table before any money leaves your pocket.</p>
                      </div>
                    </div>
                  </div>

                  <div className="terminal-features-strip">
                    {activeHub.features.map((feat) => (
                      <div key={feat} className="terminal-feature-chip">
                        <CheckCircle2 size={14} className="text-primary" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="terminal-action-footer">
                    <div className="terminal-guarantee">
                      <ShieldCheck size={16} className="text-primary" />
                      <span>Zero penalty if you decline an item upon inspection</span>
                    </div>
                    <GetAppDropdown 
                      label="Set Default Hub in App" 
                      variant="primary" 
                      align="right"
                      className="btn-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
