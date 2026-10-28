/**
 * Contact API Service
 * Handles communication with the Express backend contact endpoints.
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

/**
 * Submits contact form data to the backend.
 * @param {Object} formData - { name, email, subject, message }
 * @returns {Promise<Object>} API response data
 */
export const submitContactForm = async (formData) => {
  const url = `${API_BASE_URL}/contact`;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 12000); // 12 second timeout

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    const data = await response.json().catch(() => ({
      success: false,
      message: 'Failed to parse server response.',
    }));

    if (!response.ok) {
      const errorMessage =
        data.errors && data.errors.length > 0
          ? data.errors.join(' ')
          : data.message || `Server error (${response.status})`;
      const error = new Error(errorMessage);
      error.status = response.status;
      error.data = data;
      throw error;
    }

    return data;
  } catch (error) {
    clearTimeout(timeoutId);

    if (error.name === 'AbortError') {
      throw new Error('Network request timed out. Please verify your internet connection or backend server.');
    }

    // Provide friendly message if backend is unreachable
    if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
      throw new Error(
        'Unable to connect to the backend server. Please check if the backend service is running on ' + API_BASE_URL
      );
    }

    throw error;
  }
};

/**
 * Checks contact service health.
 */
export const checkContactHealth = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/contact/health`);
    return await response.json();
  } catch (err) {
    return { status: 'offline', error: err.message };
  }
};

export default {
  submitContactForm,
  checkContactHealth,
};

