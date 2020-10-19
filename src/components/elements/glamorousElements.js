import glamorous from 'glamorous';

const onAttention = '&:hover, &:focus';

const ControllerButton = glamorous.button({
    backgroundColor: 'transparent',
    border: 'none',
    position: 'absolute',
    right: 0,
    cursor: 'pointer',
    padding: '.25rem .5rem',
    fontSize: '1rem',
    outline: '1px solid transparent',
    border: 'none !important',
    [onAttention]: {
        outline: '1px solid transparent'
        // outline: '1px solid rgb(125, 174, 219)'
    }
}
    
    );
  
  function ArrowIcon({isOpen}) {
    return (
      <svg
        viewBox="0 0 20 20"
        preserveAspectRatio="none"
        width={16}
        fill="transparent"
        stroke="rgb(0,0,0)"
        strokeWidth="1.1px"
        transform={isOpen ? 'rotate(180)' : null}
      >
        <path d="M1,6 L10,15 L19,6" />
      </svg>
    )
  }
  
  function XIcon() {
    return (
      <svg
        viewBox="0 0 20 20"
        preserveAspectRatio="none"
        width={12}
        fill="transparent"
        stroke="rgb(0,0,0)"
        strokeWidth="1.1px"
      >
        <path d="M1,1 L19,19" />
        <path d="M19,1 L1,19" />
      </svg>
    )
  }

  const Input = glamorous.input(
    {
      width: 'calc(100% - 34px)', // full width - icon width/2 - border
      fontSize: 12,
      wordWrap: 'break-word',
      lineHeight: '16px',
      outline: 0,
      whiteSpace: 'normal',
      minHeight: '32px',
      background: '#fff',
      display: 'inline-block',
      color: 'rgba(0,0,0,.87)',
      boxShadow: 'none',
      border: '1px solid rgb(125,125,125)',
      borderRadius: 0
    }
  )
  
  const Menu = glamorous.div({
    maxHeight: '20rem',
    overflowY: 'auto',
    overflowX: 'hidden',
    outline: '0',
    borderRadius: '0 0 .28571429rem .28571429rem',
    transition: 'opacity .1s ease',
    borderColor: 'rgb(150,150,150)',
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderStyle: 'solid',
    position: 'absolute',
    right: '0',
    top: '60px',
    zIndex: '1',
    backgroundColor: 'rgb(255, 255, 255)'
  })

  const Item = glamorous.div(
    {
      position: 'relative',
      cursor: 'pointer',
      display: 'block',
      border: 'none',
      height: 'auto',
      textAlign: 'left',
      borderTop: 'none',
      lineHeight: '1em',
      color: 'rgba(0,0,0,.87)',
      fontSize: '1rem',
      textTransform: 'none',
      fontWeight: '400',
      boxShadow: 'none',
      padding: '.8rem 1.1rem',
      whiteSpace: 'normal',
      wordWrap: 'normal',
    },
    ({isActive, isSelected}) => {
      const styles = []
      if (isActive) {
        styles.push({
          color: 'rgba(0,0,0,.95)',
          background: 'rgba(0,0,0,.1)',
        })
      }
      if (isSelected) {
        styles.push({
          color: 'rgba(0,0,0,.95)',
          fontWeight: '700',
        })
      }
      return styles
    },
  );

  export {ControllerButton, XIcon,ArrowIcon, Input, Menu, Item}