package com.example.spring_project.security;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.example.spring_project.service.UserDetailsServiceImpl;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter{

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		// TODO Auto-generated method stub
		
		auth.inMemoryAuthentication().withUser("user1").password("pass1").roles("USER")
		.and().withUser("user2").password("pass2").roles("ADMIN");
	}
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		// TODO Auto-generated method stub	
		
		// add http.cors()
        http.cors().and().csrf().disable().authorizeRequests()
                .antMatchers("/user/*").permitAll()
                .antMatchers("/course/course_details").permitAll()
                .antMatchers("/course/*").hasRole("USER"); 
        

        // REST is stateless
        http.sessionManagement()
               .sessionCreationPolicy(SessionCreationPolicy.STATELESS);
	}
	
	@Bean
	public PasswordEncoder getPasswordEncoder() {
		return NoOpPasswordEncoder.getInstance();
	}
	
//	// To enable CORS
//    @Bean
//    public CorsConfigurationSource corsConfigurationSource() {
//        final CorsConfiguration configuration = new CorsConfiguration();
//
//        configuration.addAllowedOrigin("http://localhost:3000");
//        configuration.setAllowCredentials(true);
//
//        final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//        source.registerCorsConfiguration("/**", configuration);
//
//        return source;
//    }
	
//	@Bean
//    public UserDetailsService userDetailsService() {
//        return new UserDetailsServiceImpl();
//    }
//     
//    @Bean
//    public BCryptPasswordEncoder passwordEncoder() {
//        return new BCryptPasswordEncoder();
//    }
//     
//    @Bean
//    public DaoAuthenticationProvider authenticationProvider() {
//        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
//        authProvider.setUserDetailsService(userDetailsService());
//        authProvider.setPasswordEncoder(passwordEncoder());
//         
//        return authProvider;
//    }
// 
//    @Override
//    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//        auth.authenticationProvider(authenticationProvider());
////        auth.jdbcAuthentication().getUserDetailsService().
//    }
// 
//    @Autowired 
//    private DataSource dataSource; 
//    
//    @Autowired 
//    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception { 
//    	final String sqlUserName = "select u.user_name, u.user_pass, u.enable from user u where u.user_name = ?"; 
//    	final String sqlAuthorities = "select ur.user_name, ur.user_role from user_role ur where ur.user_name = ?"; 
//    	auth.jdbcAuthentication().dataSource(dataSource).usersByUsernameQuery(sqlUserName)
//    	.authoritiesByUsernameQuery(sqlAuthorities).passwordEncoder(passwordEncoder());
//    }
//    
//    
//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//        http.authorizeRequests()
//        .antMatchers("/user/*").permitAll()
//            .and()
//            .formLogin()
//            .and()
//            .logout().permitAll();
//    }

}
