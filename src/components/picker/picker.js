import { h } from 'preact';
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

export const Picker = ({ onChange, initialSelectedItem, label, items, itemToString }) => {
    
    return (
    <Downshift
      onChange={selection => {
          if(selection) {
              onChange(selection);              
          }
      }}
      initialSelectedItem = {initialSelectedItem}
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
        <section class="relative-block">
            <div class={style.picker}>
                <label {...getLabelProps()} style='text-align: right;'>{label}</label>
                <Div position="relative" css={{paddingRight: '.5em; width: 17rem; display:flex; align-items:center'}}>                
                    <Input
                    autoFocus={true}
                    {...getInputProps({
                        isOpen,
                        placeholder: 'Start typing, or pick from dropdown'
                    })}
                    />
                    {selectedItem ? (
                    <ControllerButton                         
                        css={{paddingTop: 4, outline: 'none'}}
                        onClick={clearSelection}
                        aria-label="clear selection"
                    >
                        <ArrowIcon />
                    </ControllerButton>
                    ) : (
                    <ControllerButton {...getToggleButtonProps()} css={{outline: 'none'}}>
                        <ArrowIcon isOpen={isOpen} />
                    </ControllerButton>
                    )}
                </Div>
            </div>
            {!isOpen ? null : (
                <div class="menu">
                <Menu>
                {items
                    .filter(item => !inputValue || item.toLowerCase().startsWith(inputValue.toLowerCase()))
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
                                            {itemToString(item)}
                                            </Item>
                                        )
                    )}
                </Menu>
                </div>
            )}
        </section>
      )}
    </Downshift>
    )
};