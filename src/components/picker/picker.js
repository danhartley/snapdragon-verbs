import { h } from 'preact';
import glamorous, {Div} from 'glamorous';
import Downshift from 'downshift/preact';
import style from './picker.scss';
import {
    ControllerButton,
    ArrowIcon,
    XIcon,
    Input
  } from '../../components/icons/icons'

export const Picker = props => (
    <Downshift
      onChange={selection => {
          if(selection) {
              props.onChange(selection);
            //   props.items = props.items.filter(item => item.value !== selection.value);
              setTimeout(() => {
                // document.getElementsByTagName('input')[0].value = '';
                // selection.value = '';
              });   
          }
      }}      
      itemToString={item => (item ? item.value : '')}      
    >
      {({
        getToggleButtonProps,
        getInputProps,
        getItemProps,
        getLabelProps,
        getMenuProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem,
        getRootProps,
        clearSelection
      }) => (
        <section>
            <div class={style.picker}>
                <label {...getLabelProps()}>{props.label}</label>
                <Div position="relative" css={{paddingRight: '1.75em'}}>
                    <Input
                    {...getInputProps({
                        isOpen,
                        placeholder: 'Pick a verb',
                    })}
                    />
                    {selectedItem ? (
                    <ControllerButton
                        css={{paddingTop: 4}}
                        onClick={clearSelection}
                        aria-label="clear selection"
                    >
                        <XIcon />
                    </ControllerButton>
                    ) : (
                    <ControllerButton {...getToggleButtonProps()}>
                        <ArrowIcon isOpen={isOpen} />
                    </ControllerButton>
                    )}
                </Div>

            </div>
            <ul {...getMenuProps()}>
                {isOpen
                ? props.items
                    .filter(item => !inputValue || item.value.toLowerCase().includes(inputValue.toLowerCase()))
                    .map((item, index) => (
                        <li
                        {...getItemProps({
                            key: item.value,
                            index,
                            item,
                            style: {
                            backgroundColor:
                                highlightedIndex === index ? 'lightgray' : 'white',
                            fontWeight: selectedItem === item ? 'bold' : 'normal',
                            },
                        })}
                        >
                        {item.value}
                        </li>
                    ))
                : null}
            </ul>          
        </section>
      )}
    </Downshift>
);