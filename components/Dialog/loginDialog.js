import React, { useState } from 'react';
import { ThemeContext } from '@/pages/_app';
import Link from 'next/link';
import IconSvg from '@/components/IconSvg';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Input from '@material-ui/core/Input';
import { DialogContentText } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(() => ({
  root: {
    display: 'block',
    background: 'rgba(0, 0, 0, 0.3)',
    overflowX: 'hidden',
    overflowY: 'auto',
    opacity: 1,
    outline: 0,
    transition: 'opacity .15s linear',
    boxSizing: 'border-box',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  },
  paper: {
    position: 'fixed',
    top: 0,
    boxSizing: 'border-box',
    borderRadius: 6,
    height: '80%',
    width: '40%',
    margin: '90px auto',
  },
  contentMain: {
    position: 'relative',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: '微軟正黑體',
    color: '#595656',
    lineHeight: '1.5',
    textAlign: 'center',
  },
  bottomContent: {
    padding: 20,
    textAlign: 'center',
  },
  input: {
    width: '70%',
  },
  loginButton: {
    width: '70%',
    backgroundColor: '#005C9F',
    color: '#fff',
    margin: '20px auto 0 auto',
  },
}));

const LoginDialog = (props) => {
  const { setOpen, open } = props;
  const classes = useStyles();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleClose = () => {
    setOpen(false);
  };

  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        classes={{ paper: classes.paper }}
      >
        <DialogContent
          classes={{ root: classes.contentMain }}
          className="modal-content"
        >
          <DialogContentText
            classes={{ root: classes.titleText }}
            className="bootbox-body"
          >
            登入
            <div className="content-text">
              <div>
                <FormControl
                  sx={{ m: 1, width: '25ch' }}
                  variant="standard"
                  classes={{ root: classes.input }}
                >
                  <InputLabel htmlFor="standard-adornment-password">
                    請輸入手機或信箱
                  </InputLabel>
                  <Input
                    type="text"
                    id="standard-adornment-password"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                  />
                </FormControl>
                <FormControl
                  sx={{ m: 1, width: '25ch' }}
                  variant="standard"
                  classes={{ root: classes.input }}
                >
                  <InputLabel htmlFor="standard-adornment-password">
                    請輸入密碼
                  </InputLabel>
                  <Input
                    type="text"
                    id="standard-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <Button className={classes.loginButton} variant="contained">
                  登入
                </Button>
                <div className="bottom-row">
                  <FormGroup className="remember-me-checkbox">
                    <FormControlLabel
                      control={
                        <Checkbox
                          //     checked={keepLoginStatus}
                          //     onChange={() =>
                          // setKeepLoginStatus((prevState) => !prevState)
                          //     }
                          name="keepLogin"
                        />
                      }
                      label={'記住我'}
                      // classes={keepLoginCheckboxStyles()}
                    />
                  </FormGroup>
                  <button className="button register-btn">立即註冊</button>
                </div>
              </div>
              <hr className="divider-line" />
              <div></div>
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
      <style jsx>{`
        .register-btn {
          font-size: 14px;
          color: #005c9f;
          margin-left: 45%;
        }
        .bottom-row {
          display: flex;
          width: 60%;
          margin: 10px auto;
        }
        .divider-line {
          width: 70%;
        }
      `}</style>
    </>
  );
};

export default LoginDialog;
