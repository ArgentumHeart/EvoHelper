import { ChangeEvent, useCallback, useMemo, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import { Input, InputProps } from '@mui/material';
import { CompactItem } from '../components/CompactItem';
import { useItemContext } from '../contexts/itemsContext';

type DebounceProps = {
  handleDebounce: (value: string) => void;
  debounceTimeout: number;
};
function DebounceInput(props: InputProps & DebounceProps) {
  const { handleDebounce, debounceTimeout, ...rest } = props;

  const timerRef = useRef<number>();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = window.setTimeout(() => {
      handleDebounce(event.target.value);
    }, debounceTimeout);
  };

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Input {...rest} onChange={handleChange} />;
}

type ItemsPageProps = {
  onItemSelect?: (id: string) => void;
};

export function ItemsPage(props: ItemsPageProps) {
  const { onItemSelect } = props;
  const { items } = useItemContext();
  const [filter, setFilter] = useState<string>('');
  console.log(items);
  const filteredItems = useMemo(() => {
    return Object.keys(items).filter((id) =>
      id.toLowerCase().includes(filter.toLowerCase()),
    );
  }, [filter]);

  const handleClick = useCallback(
    (id: string) => {
      if (onItemSelect) {
        onItemSelect(id);
      }
    },
    [onItemSelect],
  );

  return (
    <Box>
      <DebounceInput
        placeholder="Filter"
        debounceTimeout={500}
        handleDebounce={(value: string) => setFilter(value)}
      />
      <Box sx={{ display: 'flex', flexWrap: 'wrap', paddingTop: '20px' }}>
        {filteredItems.map((id) => (
          <CompactItem
            key={id}
            id={id}
            onClick={onItemSelect ? () => handleClick(id) : undefined}
          />
        ))}
      </Box>
    </Box>
  );
}
