const planDetails = {
  "weight-loss": {
    title: "Weight Loss Diet Plan",
    content: `
                    <div class="plan-section">
                        <h4>📅 Daily Meal Plan</h4>
                        <div class="meal-grid">
                            <div class="meal-card">
                                <h5>🌅 Breakfast</h5>
                                <p>Oats with fruits + Paneer scramble</p>
                            </div>
                            <div class="meal-card">
                                <h5>🌞 Lunch</h5>
                                <p>Dal + Brown rice + Salad</p>
                            </div>
                            <div class="meal-card">
                                <h5>🌙 Dinner</h5>
                                <p>Vegetable soup + Grilled paneer</p>
                            </div>
                        </div>
                    </div>
                    <div class="plan-section">
                        <h4>🎯 Key Strategies</h4>
                        <ul class="tips-list">
                            <li>Calorie deficit: 500 calories daily</li>
                            <li>High protein: Lentils, paneer, soy</li>
                            <li>Portion control with smaller plates</li>
                            <li>30 minutes daily exercise</li>
                            <li>3-4 liters water daily</li>
                        </ul>
                    </div>
                `,
  },
  "muscle-building": {
    title: "Muscle Building Diet Plan",
    content: `
                    <div class="plan-section">
                        <h4>💪 Daily Nutrition Goals</h4>
                        <div class="meal-grid">
                            <div class="meal-card">
                                <h5>Protein Sources</h5>
                                <p>Paneer, Soy, Lentils, Dairy</p>
                            </div>
                            <div class="meal-card">
                                <h5>Carb Sources</h5>
                                <p>Brown rice, Oats, Whole wheat</p>
                            </div>
                            <div class="meal-card">
                                <h5>Healthy Fats</h5>
                                <p>Nuts, Seeds, Avocado, Ghee</p>
                            </div>
                        </div>
                    </div>
                    <div class="plan-section">
                        <h4>🏋️ Workout Nutrition</h4>
                        <ul class="tips-list">
                            <li>Pre-workout: Banana + Almonds</li>
                            <li>Post-workout: Protein shake + Dates</li>
                            <li>Meal every 3-4 hours</li>
                            <li>Calorie surplus for growth</li>
                            <li>Proper sleep for recovery</li>
                        </ul>
                    </div>
                `,
  },
  vegetarian: {
    title: "Balanced Vegetarian Diet",
    content: `
                    <div class="plan-section">
                        <h4>🌱 Complete Nutrition</h4>
                        <div class="meal-grid">
                            <div class="meal-card">
                                <h5>Protein Sources</h5>
                                <p>Lentils, Beans, Dairy, Nuts</p>
                            </div>
                            <div class="meal-card">
                                <h5>Iron Sources</h5>
                                <p>Spinach, Beetroot, Legumes</p>
                            </div>
                            <div class="meal-card">
                                <h5>Calcium Sources</h5>
                                <p>Milk, Yogurt, Greens, Tofu</p>
                            </div>
                        </div>
                    </div>
                    <div class="plan-section">
                        <h4>📊 Daily Requirements</h4>
                        <ul class="tips-list">
                            <li>B12: Fortified foods or supplements</li>
                            <li>Iron: Combine with Vitamin C</li>
                            <li>Omega-3: Flaxseeds, Walnuts</li>
                            <li>Calcium: Dairy or fortified alternatives</li>
                            <li>Protein: 1.2g per kg body weight</li>
                        </ul>
                    </div>
                `,
  },
  keto: {
    title: "Vegetarian Keto Diet",
    content: `
                    <div class="plan-section">
                        <h4>🥑 Keto-Friendly Foods</h4>
                        <div class="meal-grid">
                            <div class="meal-card">
                                <h5>High Fat</h5>
                                <p>Avocado, Nuts, Seeds, Ghee</p>
                            </div>
                            <div class="meal-card">
                                <h5>Low Carb Veggies</h5>
                                <p>Spinach, Broccoli, Cauliflower</p>
                            </div>
                            <div class="meal-card">
                                <h5>Protein</h5>
                                <p>Paneer, Tofu, Eggs, Cheese</p>
                            </div>
                        </div>
                    </div>
                    <div class="plan-section">
                        <h4>⚡ Keto Guidelines</h4>
                        <ul class="tips-list">
                            <li>Carbs: 20-50g net daily</li>
                            <li>Fats: 70-80% of calories</li>
                            <li>Protein: 20-25% of calories</li>
                            <li>Stay hydrated with electrolytes</li>
                            <li>Monitor ketone levels</li>
                        </ul>
                    </div>
                `,
  },
  detox: {
    title: "7-Day Detox & Cleanse",
    content: `
                    <div class="plan-section">
                        <h4>🌿 Daily Detox Plan</h4>
                        <div class="meal-grid">
                            <div class="meal-card">
                                <h5>Day 1-2</h5>
                                <p>Fruits, Vegetables, Smoothies</p>
                            </div>
                            <div class="meal-card">
                                <h5>Day 3-5</h5>
                                <p>Raw salads, Soups, Juices</p>
                            </div>
                            <div class="meal-card">
                                <h5>Day 6-7</h5>
                                <p>Light meals, Gradual transition</p>
                            </div>
                        </div>
                    </div>
                    <div class="plan-section">
                        <h4>💧 Detox Focus Areas</h4>
                        <ul class="tips-list">
                            <li>Liver cleansing: Beetroot, Carrots</li>
                            <li>Kidney support: Cucumber, Melons</li>
                            <li>Digestive health: Ginger, Fennel</li>
                            <li>Antioxidants: Berries, Green tea</li>
                            <li>Hydration: 3-4 liters water daily</li>
                        </ul>
                    </div>
                `,
  },
  "heart-healthy": {
    title: "Heart Healthy Diet",
    content: `
                    <div class="plan-section">
                        <h4>❤️ Heart-Healthy Foods</h4>
                        <div class="meal-grid">
                            <div class="meal-card">
                                <h5>Cholesterol Control</h5>
                                <p>Oats, Barley, Legumes</p>
                            </div>
                            <div class="meal-card">
                                <h5>Blood Pressure</h5>
                                <p>Leafy greens, Bananas, Yogurt</p>
                            </div>
                            <div class="meal-card">
                                <h5>Omega-3 Sources</h5>
                                <p>Flaxseeds, Walnuts, Chia seeds</p>
                            </div>
                        </div>
                    </div>
                    <div class="plan-section">
                        <h4>🩺 Health Guidelines</h4>
                        <ul class="tips-list">
                            <li>Sodium: Less than 1500mg daily</li>
                            <li>Saturated fat: Limited intake</li>
                            <li>Fiber: 25-30g daily</li>
                            <li>Exercise: 30 minutes daily</li>
                            <li>Stress management: Yoga, Meditation</li>
                        </ul>
                    </div>
                `,
  },
  diabetic: {
    title: "Diabetic Diet Plan",
    content: `
                    <div class="plan-section">
                        <h4>🩸 Blood Sugar Management</h4>
                        <div class="meal-grid">
                            <div class="meal-card">
                                <h5>Low GI Carbs</h5>
                                <p>Whole grains, Legumes, Vegetables</p>
                            </div>
                            <div class="meal-card">
                                <h5>Protein Balance</h5>
                                <p>Paneer, Lentils, Soy, Dairy</p>
                            </div>
                            <div class="meal-card">
                                <h5>Healthy Fats</h5>
                                <p>Nuts, Seeds, Avocado, Olive oil</p>
                            </div>
                        </div>
                    </div>
                    <div class="plan-section">
                        <h4>📈 Meal Planning</h4>
                        <ul class="tips-list">
                            <li>Carb counting for each meal</li>
                            <li>Regular meal timings</li>
                            <li>Small, frequent meals</li>
                            <li>Monitor blood sugar levels</li>
                            <li>Combine carbs with protein/fat</li>
                        </ul>
                    </div>
                `,
  },
  mediterranean: {
    title: "Mediterranean Diet",
    content: `
                    <div class="plan-section">
                        <h4>🍅 Mediterranean Staples</h4>
                        <div class="meal-grid">
                            <div class="meal-card">
                                <h5>Healthy Fats</h5>
                                <p>Olive oil, Nuts, Avocado</p>
                            </div>
                            <div class="meal-card">
                                <h5>Plant Proteins</h5>
                                <p>Lentils, Chickpeas, Beans</p>
                            </div>
                            <div class="meal-card">
                                <h5>Whole Grains</h5>
                                <p>Whole wheat, Oats, Barley</p>
                            </div>
                        </div>
                    </div>
                    <div class="plan-section">
                        <h4>🌊 Lifestyle Elements</h4>
                        <ul class="tips-list">
                            <li>Olive oil as primary fat source</li>
                            <li>Plenty of vegetables and fruits</li>
                            <li>Regular physical activity</li>
                            <li>Social meals and enjoyment</li>
                            <li>Moderate dairy and eggs</li>
                        </ul>
                    </div>
                `,
  },
  athlete: {
    title: "Athlete Performance Diet",
    content: `
                    <div class="plan-section">
                        <h4>⚡ Performance Nutrition</h4>
                        <div class="meal-grid">
                            <div class="meal-card">
                                <h5>Pre-Workout</h5>
                                <p>Complex carbs + Light protein</p>
                            </div>
                            <div class="meal-card">
                                <h5>During Workout</h5>
                                <p>Hydration + Electrolytes</p>
                            </div>
                            <div class="meal-card">
                                <h5>Post-Workout</h5>
                                <p>Protein + Fast carbs</p>
                            </div>
                        </div>
                    </div>
                    <div class="plan-section">
                        <h4>🏃‍♂️ Training Nutrition</h4>
                        <ul class="tips-list">
                            <li>High calorie intake for energy</li>
                            <li>Balanced macronutrients</li>
                            <li>Proper hydration strategy</li>
                            <li>Meal timing around workouts</li>
                            <li>Recovery nutrition focus</li>
                        </ul>
                    </div>
                `,
  },
};

function viewPlan(planName) {
  const plan = planDetails[planName];

  document.getElementById("modalTitle").textContent = plan.title;
  document.getElementById("modalContent").innerHTML = plan.content;
  document.getElementById("planModal").style.display = "block";
}

function closeModal() {
  document.getElementById("planModal").style.display = "none";
}

// Close modal when clicking outside
window.onclick = function (event) {
  if (event.target.classList.contains("modal")) {
    closeModal();
  }
};

// Hover effects
document.querySelectorAll(".plan-card").forEach((card) => {
  card.addEventListener("mouseover", function () {
    this.style.transform = "translateY(-10px)";
  });
  card.addEventListener("mouseout", function () {
    this.style.transform = "translateY(0)";
  });
});
