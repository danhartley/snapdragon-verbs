import glamorous, {Div} from 'glamorous';
import { useState, useEffect } from 'preact/hooks';
import Downshift from 'downshift/preact';
import style from './picker.scss';
import {
    ControllerButton,
    ArrowIcon,
    XIcon,
    Input,
    Menu,
    Item
  } from '../elements/glamorousElements';

export const Picker = props => {
    
    return (
    <Downshift
      onChange={selection => {        
          if(selection) {
              props.onChange(selection);              
          }
      }}
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
                    autoFocus={true}
                    {...getInputProps({
                        isOpen,
                        placeholder: 'Start typing…'
                    })}
                    />
                    {selectedItem ? (
                    <ControllerButton                         
                        css={{paddingTop: 4}}
                        onClick={clearSelection}
                        aria-label="clear selection"
                    >
                        <ArrowIcon />
                    </ControllerButton>
                    ) : (
                    <ControllerButton {...getToggleButtonProps()}>
                        <ArrowIcon isOpen={isOpen} />
                    </ControllerButton>
                    )}
                </Div>
            </div>
            {!isOpen ? null : (
                <Menu>
                {props.items
                        .filter(item => !inputValue || item.toLowerCase().includes(inputValue.toLowerCase()))
                        .map((item, index) => (
                    <Item
                    key={item.id}
                    {...getItemProps({
                        item,
                        index,
                        isActive: highlightedIndex === index,
                        isSelected: selectedItem === item,
                    })}
                    >
                    {props.itemToString(item)}
                    </Item>
                ))}
                </Menu>
            )}
        </section>
      )}
    </Downshift>
    )
};