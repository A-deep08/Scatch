const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },

  role: {
    type: String,
    enum: ["user", "reviewer", "admin"],
    default: "user"
  },

  gender: {
    type: String,
    enum: ["male", "female", "non-binary"]
  },

  age: Number,


  datingIntent: {
    type: String,
    enum: ["serious", "casual", "marriage", "exploring"]
  },

  targetAudience: [String], 
  

  targetAgeRange: {
    min: Number,
    max: Number
  },

  desiredPerception: [String],
  

  vibeGoal: {
    type: String,
    enum: ["safe", "bold", "deep", "playful"]
  },

  selfAssessment: {
    photoScore: Number,
    bioScore: Number,
    biggestConcern: String,
    authenticityLevel: {
      type: String,
      enum: ["100% authentic", "slightly curated", "heavily optimized"]
    }
  },

  feedbackPreference: {
    type: String,
    enum: ["brutal", "balanced", "gentle"]
  },

  platformsUsed: [String],


  reviewerProfile: {
    bio: String,

    experienceLevel: {
      type: String,
      enum: ["new", "intermediate", "expert"]
    },

    specialties: [String],

    preferredAudience: [String],

    totalReviews: { type: Number, default: 0 },
    avgRating: { type: Number, default: 0 },

    totalRatingsReceived: { type: Number, default: 0 },

    badges: [String],

    isVerified: { type: Boolean, default: false }
  }

}, { timestamps: true });
