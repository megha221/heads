// Test script for LEE API
// Run this with: node test_lee_api.js

import axios from 'axios';

const API_BASE = 'http://localhost:3001/api/lee';

async function testLEEAPI() {
  try {
    console.log('🧪 Testing LEE API...\n');

    // Test data
    const testData = {
      name: 'John Doe',
      email: 'john.doe@test.com',
      age: 30,
      phone: '+91-9876543210'
    };

    // Test 1: Create LEE registration
    console.log('1. Testing POST /api/lee/register...');
    try {
      const response = await axios.post(`${API_BASE}/register`, testData);
      console.log('✅ Registration successful:', response.data);
    } catch (error) {
      console.log('❌ Registration failed:', error.response?.data || error.message);
    }

    // Test 2: Get all registrations
    console.log('\n2. Testing GET /api/lee...');
    try {
      const response = await axios.get(API_BASE);
      console.log('✅ Get all registrations successful:', response.data);
    } catch (error) {
      console.log('❌ Get registrations failed:', error.response?.data || error.message);
    }

    // Test 3: Test duplicate email
    console.log('\n3. Testing duplicate email...');
    try {
      const response = await axios.post(`${API_BASE}/register`, testData);
      console.log('❌ Duplicate email should have failed:', response.data);
    } catch (error) {
      console.log('✅ Duplicate email correctly rejected:', error.response?.data?.message);
    }

  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

// Run the test
testLEEAPI();
