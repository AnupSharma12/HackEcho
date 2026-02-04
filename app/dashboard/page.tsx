import PageShell from "../../components/PageShell";
import LearningDashboard from "../../components/LearningDashboard";

export default function DashboardPage() {
  return (
    <PageShell
      title="AI Learning Dashboard"
      description="Generate personalized documentation, examples, and answer checks with AI."
    >
      <LearningDashboard />
    </PageShell>
  );
}
