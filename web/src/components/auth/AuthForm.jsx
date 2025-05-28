// web/src/components/auth/AuthForm.jsx - Updated with better structure
import React, { useState } from 'react';
import { signIn, signUp, signInWithGoogle } from '../../../shared/firebase/auth';
import Button from '../common/Button';
import Input from '../common/Input';
import './AuthForm.css';

const AuthForm = ({ onSuccess }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    displayName: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleEmailAuth = async (e) => {
    e.preventDefault();
    
    // Basic validation
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (isSignUp && !formData.displayName) newErrors.displayName = 'Name is required';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    try {
      let user;
      if (isSignUp) {
        user = await signUp(formData.email, formData.password, formData.displayName);
      } else {
        user = await signIn(formData.email, formData.password);
      }
      onSuccess(user);
    } catch (error) {
      setErrors({ submit: getErrorMessage(error.code) });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    setLoading(true);
    try {
      const { user } = await signInWithGoogle();
      onSuccess(user);
    } catch (error) {
      setErrors({ submit: getErrorMessage(error.code) });
    } finally {
      setLoading(false);
    }
  };

  const getErrorMessage = (errorCode) => {
    switch (errorCode) {
      case 'auth/user-not-found':
        return 'No account found with this email.';
      case 'auth/wrong-password':
        return 'Incorrect password.';
      case 'auth/email-already-in-use':
        return 'An account with this email already exists.';
      case 'auth/weak-password':
        return 'Password should be at least 6 characters.';
      case 'auth/invalid-email':
        return 'Please enter a valid email address.';
      default:
        return 'Something went wrong. Please try again.';
    }
  };

  return (
    <div className="auth-form">
      <div className="auth-form__header">
        <h1>💰 TrackIt</h1>
        <p>Your Personal Expense Tracker</p>
      </div>
      
      <h2>{isSignUp ? 'Create Account' : 'Welcome Back'}</h2>
      
      {errors.submit && (
        <div className="auth-form__error">{errors.submit}</div>
      )}
      
      <Button
        variant="google"
        onClick={handleGoogleAuth}
        loading={loading}
        className="auth-form__google-btn"
      >
        Continue with Google
      </Button>

      <div className="auth-form__divider">
        <span>or</span>
      </div>

      <form onSubmit={handleEmailAuth} className="auth-form__form">
        {isSignUp && (
          <Input
            label="Full Name"
            value={formData.displayName}
            onChange={(value) => updateField('displayName', value)}
            error={errors.displayName}
            required
          />
        )}
        
        <Input
          label="Email"
          type="email"
          value={formData.email}
          onChange={(value) => updateField('email', value)}
          error={errors.email}
          required
        />
        
        <Input
          label="Password"
          type="password"
          value={formData.password}
          onChange={(value) => updateField('password', value)}
          error={errors.password}
          required
        />
        
        <Button 
          type="submit" 
          loading={loading}
          className="auth-form__submit"
        >
          {isSignUp ? 'Create Account' : 'Sign In'}
        </Button>
      </form>

      <p className="auth-form__switch">
        {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
        <button 
          onClick={() => setIsSignUp(!isSignUp)}
          className="auth-form__switch-btn"
          type="button"
        >
          {isSignUp ? 'Sign In' : 'Sign Up'}
        </button>
      </p>
    </div>
  );
};

export default AuthForm;