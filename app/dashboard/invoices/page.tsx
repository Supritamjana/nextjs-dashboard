import { Card } from '@/app/ui/dashboard/cards';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { fetchAscInvoices, fetchDescInvoices, fetchUser,fetchTotalRevenue } from '@/app/lib/data';

export default async function Page() {
  const descInvoice = await fetchDescInvoices();
  const ascInvoice = await fetchAscInvoices();
  const countUser = await fetchUser();
  const totalRevenue = await fetchTotalRevenue();
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Invoice Dashboard 
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        <Card title="User" value={countUser} type="customers" />
        {/* <Card title="Pending" value={totalPendingInvoices} type="pending" /> */}
        <Card title="Total Revenue" value={totalRevenue} type="invoices" />
        {/* <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        /> */}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <LatestInvoices latestInvoices={descInvoice} />
        <LatestInvoices latestInvoices={ascInvoice} />
      </div>
    </main>
  );
}