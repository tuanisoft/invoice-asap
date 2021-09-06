import React from 'react';
import './Dashboard.scss';

import { Button, Heading } from 'evergreen-ui';
import InvoiceCard from './InvoiceCard';

const Dashboard: React.FC = () => {
  return (
    <div className="Dashboard">
      <Heading size={800}>
        Dashboard
        <Button marginLeft={10} size="small" appearance="primary" intent="success">
          Add Invoice
        </Button>
      </Heading>

      <div className="invoices-pane">
        <InvoiceCard />
        <InvoiceCard />
        <InvoiceCard />
        <InvoiceCard />
        <InvoiceCard />
        <InvoiceCard />
        <InvoiceCard />
        <InvoiceCard />
        <InvoiceCard />
        <InvoiceCard />
      </div>
    </div>
  )
};

export default Dashboard;
