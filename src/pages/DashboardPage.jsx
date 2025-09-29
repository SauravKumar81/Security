// import { DeviceCard } from '../components/DeviceCard';

// export const DashboardPage = ({ devices }) => (
//   <div className="flex-1 overflow-auto p-8">
//     <h2 className="text-4xl font-bold mb-8 text-white">Dashboard</h2>
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl">
//       {devices.map((device) => (
//         <DeviceCard key={device.id} device={device} />
//       ))}
//     </div>
//   </div>
// );


import { DeviceCard } from "../components/DeviceCard.jsx";

export const DashboardPage = ({ devices }) => {
  return (
    <div className="flex-1 overflow-auto p-8">
      <h2 className="text-4xl font-bold mb-8 text-white ">Dashboard</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {devices.map((device) => (
          <DeviceCard key={device.id} device={device} />
        ))}
      </div>
    </div>
  );
};
