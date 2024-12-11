import { format, parse } from "date-fns"
import { ru } from "date-fns/locale"
import React from "react"
import { getStopLabel } from "../utils/getStopLabel"
import "./Ticket.css"

interface TicketProps {
  ticket: {
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
  };
  price: number; 
  currency: string; 
}

const Ticket: React.FC<TicketProps> = ({ ticket, price, currency }) => {
  const dep = parse(ticket.departure_date, "dd.MM.yy", new Date());
  const arr = parse(ticket.arrival_date, "dd.MM.yy", new Date());

  const departureDate = format(dep, "dd MMM yyyy, EE", { locale: ru });
  const arrivalDate = format(arr, "dd MMM yyyy, EE", { locale: ru });

  return (
    <div className="ticket-container">
      <div className="flex flex-col items-center w-1/4 pr-4">
        <div className="mb-4">
          <img
            src={`https://via.placeholder.com/110x50?text=${ticket.carrier}`}
            alt={ticket.carrier}
            className="w-full object-contain"
          />
        </div>
        <button className="bg-orange-500 text-white text-sm font-semibold py-2 px-4 rounded hover:bg-orange-600 transition">
          Купить за {price.toLocaleString()} {currency}
        </button>
      </div>
      <div className="absolute top-0 left-[27%] bottom-0 border border-gray-200"></div>
      <div className="ml-4 w-3/4">
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-2xl font-normal size-[36px] text-gray-600">
              {ticket.departure_time}
            </p>
            <p className="text-sm font-normal text-gray-600">
              {ticket.origin}, {ticket.origin_name}
            </p>
            <div className="text-gray-500 text-sm">
              <p>{departureDate}</p>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm">
            {getStopLabel(ticket.stops)}
            <div className="my-1 border-t border-gray-300 w-full relative">
              <span className="absolute bg-white -top-[6px] left-[100%] transform -translate-x-1/2 ">
                <svg
                  width="12px"
                  height="12px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.00955 5.12769H11.0096C12.1141 5.12769 13.4679 5.8969 14.0333 6.84578L16.5088 11.0001H21.0096C21.5618 11.0001 22.0096 11.4478 22.0096 12.0001C22.0096 12.5524 21.5618 13.0001 21.0096 13.0001H16.4137L13.9382 17.1544C13.3728 18.1033 12.019 18.8725 10.9144 18.8725H8.91441L12.4137 13.0001H5.42473L3.99023 15.453H1.99023L4.00955 12.0001L4.00955 11.9671L2.00955 8.5472H4.00955L5.44405 11.0001H12.5088L9.00955 5.12769Z"
                    fill="#949292"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div>
            <p className="text-2xl font-normal size-[36px] text-gray-600">
              {ticket.arrival_time}
            </p>
            <p className="text-sm text-gray-600">
              {ticket.destination}, {ticket.destination_name}
            </p>
            <div className="text-gray-500 text-sm">
              <p>{arrivalDate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
