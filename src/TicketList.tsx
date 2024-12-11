import React from "react"
import Ticket from "./Ticket/Ticket"
import TicketSkeleton from "./TicketSkeleton"

interface Ticket {
  origin: string;
  origin_name: string;
  destination: string;
  destination_name: string;
  departure_date: string;
  departure_time: string;
  arrival_date: string;
  arrival_time: string;
  carrier: string;
  stops: number;
  price: number;
}

interface TicketListProps {
  tickets: Ticket[];
  currency: string;
}

const currencyRates: Record<string, number> = {
  RUB: 1,
  USD: 0.013,
  EUR: 0.012,
};
const TicketList: React.FC<TicketListProps> = ({ tickets, currency }) => {
  return (
    <div>
      {tickets.length === 0 ? (
        <TicketSkeleton />
      ) : (
        tickets.map((ticket, index) => (
          <Ticket
            key={index}
            ticket={ticket}
            price={Math.round(ticket.price * (currencyRates[currency] || 1))}
            currency={currency}
          />
        ))
      )}
    </div>
  );
};

export default TicketList;
