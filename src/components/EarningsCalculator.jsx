import { useState } from 'react';
import { 
  Calculator, 
  TrendingUp, 
  Sparkles, 
  ArrowRight, 
  DollarSign,
  ShieldCheck,
  CheckCircle,
  Store
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../siteConfig';

export default function EarningsCalculator() {
  const [weeklyOrders, setWeeklyOrders] = useState(15);
  const [avgOrderPrice, setAvgOrderPrice] = useState(60);

  const weeklyGross = weeklyOrders * avgOrderPrice;
  const monthlyGross = weeklyGross * 4;
  const monthlySemester = monthlyGross * 4; // 16-week semester

  return (
    <section className="calculator-section">
      <div className="container-main">
        <div className="calculator-box">
          <div className="calculator-grid">
            {/* Left: Interactive Controls */}
            <div className="calculator-controls">
              <div className="badge-kicker-glow">
                <TrendingUp size={14} />
                <span>Student Merchant Potential</span>
              </div>
              <h2>How much can you earn selling on your campus?</h2>
              <p className="calculator-lead">
                Whether you sell thrift clothes, baked goods, electronic accessories, or academic supplies, calculate your potential monthly revenue through DefiMart.
              </p>

              <div className="range-group">
                <div className="range-header">
                  <label htmlFor="orders-range">Estimated Orders Per Week</label>
                  <span className="range-value-pill">{weeklyOrders} orders/wk</span>
                </div>
                <input
                  id="orders-range"
                  type="range"
                  min="3"
                  max="80"
                  step="1"
                  value={weeklyOrders}
                  onChange={(e) => setWeeklyOrders(Number(e.target.value))}
                  className="custom-range"
                />
                <div className="range-hints">
                  <span>Part-time (3-10)</span>
                  <span>Active seller (15-30)</span>
                  <span>Campus Brand (50+)</span>
                </div>
              </div>

              <div className="range-group">
                <div className="range-header">
                  <label htmlFor="price-range">Average Item Price (GHS)</label>
                  <span className="range-value-pill">GHS {avgOrderPrice}</span>
                </div>
                <input
                  id="price-range"
                  type="range"
                  min="20"
                  max="350"
                  step="5"
                  value={avgOrderPrice}
                  onChange={(e) => setAvgOrderPrice(Number(e.target.value))}
                  className="custom-range"
                />
                <div className="range-hints">
                  <span>Snacks/Pastries (20-40)</span>
                  <span>Fashion/Thrift (60-120)</span>
                  <span>Tech/Gadgets (150-300+)</span>
                </div>
              </div>

              <div className="calc-disclaimer">
                <ShieldCheck size={16} className="text-primary flex-shrink-0" />
                <span>
                  DefiMart takes 0% card transaction deductions because payments are settled directly on pickup. You keep 100% of your earnings.
                </span>
              </div>
            </div>

            {/* Right: Real-time Output Dashboard */}
            <div className="calculator-results-card">
              <div className="results-header">
                <span className="results-kicker">Projected Take-Home Revenue</span>
                <div className="results-main-amount">
                  <span className="currency">GHS</span>
                  <span className="amount">{monthlyGross.toLocaleString()}</span>
                  <span className="period">/ month</span>
                </div>
              </div>

              <div className="results-breakdown">
                <div className="breakdown-row">
                  <span>Weekly Earnings:</span>
                  <strong>GHS {weeklyGross.toLocaleString()}</strong>
                </div>
                <div className="breakdown-row">
                  <span>Semester Projection (4 Months):</span>
                  <strong>GHS {monthlySemester.toLocaleString()}</strong>
                </div>
                <div className="breakdown-row highlight">
                  <span>Upfront Merchant Setup:</span>
                  <strong className="text-emerald-500">FREE (0 GHS)</strong>
                </div>
              </div>

              <div className="results-cta">
                <Link to="/sellers" className="btn btn-primary btn-block">
                  <span>Launch Your Storefront</span>
                  <ArrowRight size={16} />
                </Link>
                <p className="results-subtext">
                  Apply in 3 minutes · Identity verified within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
