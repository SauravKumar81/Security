// Devices Page Component
export const DevicesPage = ({ devices }) => {
  return (
    <div className="flex-1 overflow-auto p-8">
      <h2 className="text-4xl font-bold mb-8 text-white">All Devices</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {devices.map((device) => (
          <DeviceCard key={device.id} device={device} />
        ))}
      </div>
    </div>
  );
};