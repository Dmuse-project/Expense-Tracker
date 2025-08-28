import "./ModuleCard.css"

const ModuleCard = (props) => {
    const content = `module-card + ${props.className}`
    return <div className={content}>{props.children}</div>
}
export default ModuleCard
