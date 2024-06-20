import './CheckboxComponent.css';
import ChecklistDark from '../../assets/checkbox-one.svg'
import ChecklistLight from '../../assets/checkbox-two.svg';

interface CheckboxProps { 
    label: string;
    isActive: boolean;
    onClick: () => void;
}

const Checkbox = ({
    isActive,
    label,
    onClick
}: CheckboxProps) => {
    return (
        <div 
            onClick={onClick} 
            className={'checkbox-container'}
        >
            <div className='label'>
                {label}
            </div>
            <div className={isActive ? `checkbox-icon-container-light` : 'checkbox-icon-container-default'}>
                <img src={isActive ? ChecklistLight : ChecklistDark} className={isActive ? 'checklist-icon-active' : 'checklist-icon'} />
            </div>
        </div>
    );
};

export default Checkbox;
