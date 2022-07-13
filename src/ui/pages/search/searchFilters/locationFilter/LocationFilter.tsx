import SelectInput from "@app/ui/components/forms/select/Select";
import HelpIcon from "@app/ui/components/helpIcon/HelpIcon";
import { SelectChangeEvent } from "@mui/material";

interface LocationFilterProps {
  value: string;
  onChange: (e: SelectChangeEvent<string>) => void;
}

const LocationFilter = ({value, onChange}: LocationFilterProps) => {

  return (
    <>
      <section className='section-filter-class'>  
        <h3 className='h3-class'>
          Município
          <HelpIcon/>
        </h3>
        <SelectInput
          options={[{value: 'x', label: 'x'},{value: 'y', label: 'y'}]} 
          placeholder='Selecione um munícipio' 
          value={value} 
          name='location'
          onChange={onChange}
        />
      </section>
    </>
  );
};

export default LocationFilter;
