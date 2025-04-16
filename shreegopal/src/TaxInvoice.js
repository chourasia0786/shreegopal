import React from "react";

const TaxInvoice = () => {
  return (
    <div className="invoice-box">
      <style>
        {`
        :root {
          --primary-color: #1a237e;
          --header-bg: #3f51b5;
          --header-text: #ffffff;
          --soft-bg: #f3f4ff;
          --border-color: #c5cae9;
          --accent-color: #7986cb;
          --highlight: #e8eaf6;
        }

        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: #f4f6f8;
          color: #212121;
        }

        .invoice-box {
          max-width: 900px;
          margin: auto;
          background: #fff;
          border-radius: 10px;
          padding: 40px 50px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          border: 1px solid var(--border-color);
        }

        h2, .main-header {
          color: var(--header-bg);
          margin-bottom: 5px;
          font-size: 28px;
        }

        h4 {
          margin: 0;
          color: var(--accent-color);
        }

        .highlight-block {
          background-color: var(--highlight);
          padding: 15px 20px;
          border-radius: 8px;
          margin-bottom: 20px;
          line-height: 1.6;
        }

        .highlight-block p {
          margin: 4px 0;
        }

        .info-table td {
          padding: 10px 8px;
          border: 1px solid var(--border-color);
        }

        .info-table {
          margin-top: 20px;
          border-collapse: collapse;
          width: 100%;
        }

        .info-title {
          font-weight: bold;
          color: var(--primary-color);
        }

        .section-title {
          font-weight: 600;
          color: var(--primary-color);
          margin-top: 30px;
          margin-bottom: 10px;
          font-size: 18px;
        }

        .declaration, .bank-details, .authorized {
          background-color: var(--soft-bg);
          border-left: 4px solid var(--accent-color);
          padding: 15px 20px;
          border-radius: 6px;
          margin-top: 15px;
        }

        .authorized {
          text-align: right;
          font-weight: bold;
          color: var(--primary-color);
        }

        .billing-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 30px;
        }

        .billing-table th,
        .billing-table td {
          border: 1px solid var(--border-color);
          padding: 10px;
          text-align: left;
        }

        .billing-table th {
          background-color: var(--soft-bg);
          color: var(--primary-color);
        }

        .right {
          text-align: right;
        }

        .bold {
          font-weight: bold;
        }

        @media print {
          body {
            background: #fff;
          }

          .invoice-box {
            box-shadow: none;
            margin: 0;
            padding: 0;
          }
        }
        `}
      </style>

      <div className="highlight-block">
        <h2 className="main-header">🧾 Tax Invoice</h2>
        <h4><strong>SHREE GOPAL ACCESSORIES</strong></h4>
        <p><strong>Mobile Accessories</strong></p>
        <p><span className="info-title">GSTIN:</span> 27AICPC5515G1ZO</p>
        <p>
          1st Floor, Shop No. 144/145, Orchid City Centre Mall,<br />
          Bellasis Road, Opp. S.T. Depot, Tardeo,<br />
          Mumbai Central, Mumbai City, Maharashtra – 400008
        </p>
      </div>

      <table className="info-table">
        <tbody>
          <tr>
            <td><span className="info-title">Invoice No.:</span> ____________</td>
            <td><span className="info-title">Invoice Date:</span> ____ / ____ / ______</td>
          </tr>
          <tr>
            <td><span className="info-title">Buyer Name:</span> __________________</td>
            <td><span className="info-title">GSTIN:</span> ______________________</td>
          </tr>
          <tr>
            <td colSpan="2"><span className="info-title">Buyer Address:</span> _____________________________________________</td>
          </tr>
        </tbody>
      </table>

      <table className="billing-table">
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Description of Goods</th>
            <th>HSN/SAC</th>
            <th>Qty</th>
            <th>Rate (₹)</th>
            <th>Amount (₹)</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4].map((item) => (
            <tr key={item}>
              <td>{item}</td>
              <td></td>
              <td></td>
              <td></td>
              <td className="right"></td>
              <td className="right"></td>
            </tr>
          ))}
          <tr>
            <td colSpan="5" className="right bold">Subtotal</td>
            <td className="right">₹__________</td>
          </tr>
          <tr>
            <td colSpan="5" className="right">CGST 9%</td>
            <td className="right">₹__________</td>
          </tr>
          <tr>
            <td colSpan="5" className="right">SGST 9%</td>
            <td className="right">₹__________</td>
          </tr>
          <tr>
            <td colSpan="5" className="right">IGST 18%</td>
            <td className="right">₹__________</td>
          </tr>
          <tr>
            <td colSpan="5" className="right bold">Total Amount</td>
            <td className="right bold">₹__________</td>
          </tr>
        </tbody>
      </table>

      <div className="bank-details">
        <div className="section-title">🏦 Bank Details</div>
        <p><strong>Bank Name:</strong> HDFC</p>
        <p><strong>A/C No.:</strong> 50200077371004</p>
        <p><strong>IFSC Code:</strong> HDFC0000626</p>
        <p><strong>Branch:</strong> Null Bazar</p>
      </div>

      <div className="declaration">
        <div className="section-title">📌 Declaration</div>
        <p>We declare that this invoice shows the actual price of the goods described and that all particulars are true and correct.</p>
      </div>

      <div className="authorized">
        Authorized Signatory<br />
        (For SHREE GOPAL ACCESSORIES)
      </div>
    </div>
  );
};

export default TaxInvoice;
