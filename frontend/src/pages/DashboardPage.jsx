import DashboardCard from '../components/layout/DashboardCard';
import PointsHistoryChart from '../components/charts/PointsHistoryChart';
import UpcomingRaces from '../components/layout/UpcomingRaces';
import DriverStandings from '../components/standings/DriverStandings';
import ConstructorStandings from '../components/standings/ConstructorStandings';
import LatestRaceResults from '../components/layout/LatestRaceResults';
import SyncStatus from '../components/layout/SyncStatus';

export default function DashboardPage() {
  return (
    <div className="pt-28 p-6 font-sans text-gray-200 max-w-7xl mx-auto">

      {/* Main grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">

        {/* Points History Chart - Full width */}
        <div className="lg:col-span-3">
          <DashboardCard
            title="📈 Points History"
          >
            <div className="h-80 p-4 bg-black/10 rounded shadow-inner text-white">
              <PointsHistoryChart />
            </div>
          </DashboardCard>
        </div>

        {/* Driver Standings */}
        <DashboardCard title="🏆 Driver Leaderboard">
          <div className="h-[35rem] overflow-y-auto custom-scrollbar">
            <DriverStandings />
          </div>
        </DashboardCard>

        {/* Left Column - Upcoming Races and Latest Race Results */}
        <div className="space-y-6">
          <DashboardCard title="📅 Upcoming Races">
            <div className="h-60 p-4 bg-black/10 rounded shadow-inner text-sm text-white overflow-y-auto custom-scrollbar">
              <UpcomingRaces />
            </div>
          </DashboardCard>

          <DashboardCard title="🏁 Latest Race Results">
            <div className="h-60 p-4 bg-black/10 rounded shadow-inner text-sm text-white overflow-y-auto custom-scrollbar">
              <LatestRaceResults />
            </div>
          </DashboardCard>
        </div>

        {/* Constructor Leaderboard */}
        <DashboardCard title="🏎️ Constructor Leaderboard">
          <div className="h-[35rem] overflow-y-auto custom-scrollbar">
            <ConstructorStandings />
          </div>
        </DashboardCard>
        
      </div>

      {/* Footer Sync Info */}
      <div className="mt-6">
        <SyncStatus />
      </div>
    </div>
  );
}