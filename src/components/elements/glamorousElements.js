import glamorous from 'glamorous';

const onAttention = '&:hover, &:focus';

const ControllerButton = glamorous.button({
    backgroundColor: 'transparent',
    border: 'none',
    position: 'absolute',
    right: 0,
    top: 10,
    cursor: 'pointer',
    padding: '0.25rem 0.5rem .1rem 0.5rem !important',
    fontSize: '1rem',
    outline: '3px solid transparent',
    // outline: '0',
    border: '1px solid transparent'
    // border: '1px solid rgb(89, 173, 201)'
  })
  
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
      width: 'calc(100% - 16px)', // full width - icon width/2 - border
      fontSize: 14,
      wordWrap: 'break-word',
      lineHeight: '1em',
      outline: 0,
      whiteSpace: 'normal',
      minHeight: '2em',
      background: '#fff',
      display: 'inline-block',
      padding: '.5em 2em .5em 1em !important',
      color: 'rgba(0,0,0,.87)',
      boxShadow: 'none',
      border: '1px solid rgb(125,125,125)',
    //   border: '1px solid rgba(34,36,38,.15)',
    //   borderRadius: '.30rem',
    //   transition: 'box-shadow .1s ease,width .1s ease',
    //   ':hover': {
    //     borderColor: 'rgba(34,36,38,.35)',
    //     boxShadow: 'none',
    //   },
    //   [onAttention]: {
    //     borderColor: '#96c8da',
    //     boxShadow: '0 2px 3px 0 rgba(34,36,38,.15)',
    //   },
    },
    // ({isOpen}) =>
    //   isOpen
    //     ? {
    //         borderBottomLeftRadius: '0',
    //         borderBottomRightRadius: '0',
    //       }
    //     : null,
  )
  
  const Menu = glamorous.div({
    maxHeight: '20rem',
    overflowY: 'auto',
    overflowX: 'hidden',
    outline: '0',
    borderRadius: '0 0 .28571429rem .28571429rem',
    transition: 'opacity .1s ease',
    // boxShadow: '0 2px 3px 0 rgba(34,36,38,.15)',
    borderColor: 'rgb(150,150,150)',
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderStyle: 'solid',
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