import PageShell from "../../components/PageShell";
import NewLearningDashboard from "../../components/NewLearningDashboard";

export default function DashboardPage() {
  return (
    <PageShell
      title="Learning Dashboard"
      description="Choose a programming language and start learning!"
    >
      <NewLearningDashboard />
    </PageShell>
  );
}
