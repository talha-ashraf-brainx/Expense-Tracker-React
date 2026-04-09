import './OverviewContainer.css'


const OverviewContainer = () => {
    return (
        <div className="overview-container">

            <h3>Budget Overview</h3>

            <OverviewContainerItem title="HOUSING" progress={75} color="#5D5E61" />
            <OverviewContainerItem title="FOOD" progress={50} color="#1C6D25" />
            <OverviewContainerItem title="TRANSPORTATION" progress={25} color="#5D5E61" />

            <button>
                Adjust All Budgets
            </button>

        </div>
    )
}

export default OverviewContainer

type OverviewContainerItemType = {
    title: string
    progress: number
    color: string
}


export const OverviewContainerItem = ({ title, progress, color }: OverviewContainerItemType) => {
    const value = Math.min(100, Math.max(0, progress))

    return (
        <div className="overview-container-item">
            <div className="overview-container-item-header">
                <h4>{title}</h4>
                <h4>{value}%</h4>
            </div>

            <div
                className="overview-container-item-progress-bar"
                role="progressbar"
                aria-valuenow={value}
                aria-valuemin={0}
                aria-valuemax={100}
            >
                <div
                    className="overview-container-item-progress-bar-fill"
                    style={{ width: `${value}%`, backgroundColor: color }}
                />
            </div>
        </div>
    )
}
