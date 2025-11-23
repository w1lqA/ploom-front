export function ProjectsStats() {
  const stats = [
    { value: 12, label: 'Всего проектов', color: 'text-blue-400' },
    { value: 8, label: 'Завершённые', color: 'text-green-400' },
    { value: 3, label: 'В процессе', color: 'text-yellow-400' },
    { value: 1, label: 'Черновики', color: 'text-gray-400' },
  ];

  return (
    <div className="bg-dark-card p-6 rounded-xl border border-dark-border mb-8">
      <h3 className="text-lg font-medium mb-4">Статистика проектов</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className={`text-2xl font-light ${stat.color}`}>{stat.value}</div>
            <div className="text-gray-400 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}