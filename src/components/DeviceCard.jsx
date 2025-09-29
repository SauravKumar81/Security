
// import { Smartphone, Battery, BatteryMedium, BatteryLow, ChevronRight } from 'lucide-react';

// export const DeviceCard = ({ device }) => {
//   const getBatteryIcon = (level) => {
//     if (level > 60) return Battery;
//     if (level > 30) return BatteryMedium;
//     return BatteryLow;
//   };

//   const BatteryIcon = getBatteryIcon(device.battery);

//   return (
//     <div className="bg-slate-800/80 backdrop-blur rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-200 hover:shadow-xl">
//       <div className="mb-5">
//         <h3 className="text-xl font-semibold mb-1 text-white">{device.name}</h3>
//         <p className="text-slate-400 text-sm">{device.model}</p>
//       </div>

//       <div className="flex items-center justify-between mb-5">
//         <div className="flex items-center gap-2">
//           <div
//             className={`w-3 h-3 rounded-full ${
//               device.status === 'online' ? 'bg-emerald-500 shadow-lg shadow-emerald-500/50' : 'bg-slate-500'
//             }`}
//           />
//           <span className="capitalize text-sm font-medium">{device.status}</span>
//         </div>
//         <div className="flex items-center gap-2 text-slate-400">
//           <Smartphone className="w-4 h-4" />
//           <span className="text-sm">{device.simStatus}</span>
//         </div>
//       </div>

//       <div className="flex items-center justify-between text-slate-400 mb-6 text-sm">
//         <div className="flex items-center gap-2">
//           <BatteryIcon className={`w-5 h-5 ${device.battery < 30 ? 'text-red-500' : device.battery < 60 ? 'text-yellow-500' : 'text-emerald-500'}`} />
//           <span className="font-medium">{device.battery}%</span>
//         </div>
//         <span>{device.lastSeen}</span>
//       </div>

//       <button className="w-full bg-slate-700 hover:bg-slate-600 text-white py-2.5 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 font-medium hover:shadow-lg">
//         Manage
//         <ChevronRight className="w-4 h-4" />
//       </button>
//     </div>
//   );

// };


import {  Battery, BatteryMedium, BatteryLow, ChevronRight } from "lucide-react";

export const DeviceCard = ({ device }) => {
  const getBatteryIcon = (level) => {
    if (level > 60) return Battery;
    if (level > 30) return BatteryMedium;
    return BatteryLow;
  };

  const BatteryIcon = getBatteryIcon(device.battery);

  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all">
      <h3 className="text-xl font-semibold mb-1 text-white">{device.name}</h3>
      <p className="text-slate-400 text-sm mb-3">{device.model}</p>

      <div className="flex items-center justify-between mb-3">
        <span className={`capitalize text-sm font-medium ${device.status === "online" ? "text-emerald-500" : "text-red-500"}`}>
          {device.status}
        </span>
        <span className="text-sm text-slate-400">{device.simStatus}</span>
      </div>

      <div className="flex items-center justify-between text-sm text-slate-400 mb-3">
        <div className="flex items-center gap-2">
          <BatteryIcon className="w-5 h-5" />
          <span>{device.battery}%</span>
        </div>
        <span>{device.lastSeen}</span>
      </div>

      <button className="w-full bg-slate-700 hover:bg-slate-600 text-white py-2 rounded-lg flex items-center justify-center gap-2">
        Manage <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};
